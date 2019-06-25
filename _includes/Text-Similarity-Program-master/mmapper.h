#ifndef _MMAPPER_H_
#define _MMAPPER_H_

#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>
#include <sys/mman.h>
#include <sys/stat.h>

typedef unsigned char byte;


#define ERR(msg)  { fprintf(stderr, "%s\n", msg); exit(2); }

//mappa il file 'fname' nella variabile 'file'
void map( char* fname, int* size, byte** file ) {
    int n, i;
    byte *text;

    FILE *fd;
    struct stat stat_buffer;


    /* apriamo il file in lettura e scrittura */
    fd = fopen( fname, "r+w" );
    if ( fd == NULL )
        ERR("errore di apertura del file");

    /* lunghezza del file in byte */
    if (fstat( fileno(fd), &stat_buffer) == -1)
        ERR("errore nella fstat");
    *size = stat_buffer.st_size;

    /* mmap per associare text all'intero file in fd */
    *file = (byte *)mmap(NULL, *size, PROT_READ | PROT_WRITE, MAP_SHARED, fileno(fd), 0);
    if ( *file == NULL )
        ERR( "errore nella mmap" );

    fclose(fd);
}


void getStrings(byte* file, int fsize, char*** strings, int* ssize)
{
    int i, j, t = 0, spaces = 0;

    while(t < fsize && file[t] == ' ') {
        t++;
    }
    for(i=t; i < fsize; i++)
    {
        if(file[i] == '\n') file[i] = ' ';
        if(file[i] == ',') file[i] = ' ';
        if(file[i] == '.') file[i] = ' ';
        if(file[i] == ';') file[i] = ' ';
        if(file[i] == '?') file[i] = ' ';
        if(file[i] == '!') file[i] = ' ';
        if(file[i] == '-') file[i] = ' ';
        if(file[i] == '_') file[i] = ' ';
        if(file[i] == '|') file[i] = ' ';
        if(file[i] == ':') file[i] = ' ';
        if(file[i] == '(') file[i] = ' ';
        if(file[i] == ')') file[i] = ' ';
        if(file[i] == '[') file[i] = ' ';
        if(file[i] == ']') file[i] = ' ';
        if(file[i] == '{') file[i] = ' ';
        if(file[i] == '}') file[i] = ' ';
        if(file[i] == '<') file[i] = ' ';
        if(file[i] == '>') file[i] = ' ';
        if(file[i] == '=') file[i] = ' ';
        if(file[i] == '\"') file[i] = ' ';
        if(file[i] == '/') file[i] = ' ';
        if(file[i] == '\'') file[i] = ' ';
        if(i+2 < fsize) { // Genitivo sassone 's
            if(file[i] == '\'' && file[i+1] == 's' && file[i+2] == ' ') {
                file[i] = ' ';
                file[i+1] = ' ';
                file[i+2] = ' ';

                i = i+2; // dopo i viene ancora incrementato (quindi diventa i+3)...
            }
        }

        if(i!=t && i<fsize && file[i] != ' ' && file[i-1] == ' ') {
            spaces++;
        }
    }

    if(spaces == 0) {// ho un file che contiene solo spazi oppure è vuoto...
        ssize = 0;
        strings = NULL;
        return;
    }

    int asize = spaces+1;

    char** array = (char**) malloc ( asize*sizeof(char*) );

    j = t; // rappresenta la posizione su cui mi trovo in file
    for(i=0; i<asize && j<fsize; i++) {
        // Devo mettere alla posizione array[i] la i-esima stringa del file
        int length_array_i = 0;

        while(j<fsize && file[j] != ' ') {
            // Conto il numero di caratteri che saranno contenuti nella stringa array[i]
            length_array_i++;
            j++;
        }

        if(length_array_i > 0) {
            array[i] = (char*) malloc((length_array_i+1) * sizeof(char)); // perchè alla fine devo mettere \0

            int k = 0;
            while(k < length_array_i) {
                // Inserisco i caratteri in array[i]
                array[i][k] = (char) tolower(file[j-length_array_i+k]);
                k++;
            }
            array[i][length_array_i] = '\0';
        }
        else {
            i--;
        }
        j++;
        // qui la i viene incrementata!
    }

    *strings = array;
    *ssize = asize;
}


#endif