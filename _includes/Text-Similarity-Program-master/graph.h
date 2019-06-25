#ifndef _GRAPH_
#define _GRAPH_

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "dizionario.h"
#include "mmapper.h"

#define number_common_keywords 144

#define number_most_frequent_words 25

#define maximum_depth 3

char* common_keywords[number_common_keywords] = {"000", "without", "same", "against", "later", "made", "both", "through", "being", "early", "three", "including", "under", "since", "during", "however", "while", "where", "been", "more", "may", "between", "i", "ii", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "such", "has", "am", "is", "are", "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he",
        "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", 
        "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", 
        "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some",
        "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use",
        "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us", "was", "were", "had", "many", "s"};


//---AUSILIARY FUNCTIONS---
int min(int a, int b) {
    if(b>a)
        return a;
    return b;
}

int max(int a, int b) {
    if(b>a)
        return b;
    return a;
}

int contains(int* array, int length, int i) {
    for(int j=0; j<length; j++) {
        if(array[j] == i) {
            return 1;
        }
    }
    return 0;
}
//---END AUSILIARY FUNCTIONS---


typedef struct grafo {
    int** adjacency;
    int* incoming_degrees;
    int starting_ID; // reppresenta il più piccolo ID associato ad una stringa contenuta nel grafo
    int length; // rappresenta la lunghezza della lista adjacency e di incoming_degrees
    int high_frequencies [number_most_frequent_words];
} graph;

graph* nuovo_grafo() {
	graph* grafo = (graph*) malloc(sizeof(graph));
	grafo->adjacency = NULL;
    grafo->incoming_degrees = NULL;
    grafo->length = 0;
    grafo->starting_ID = 0;

    for(int i=0; i<number_most_frequent_words; i++) {
        grafo->high_frequencies[i] = -1;
    }
    
    return grafo;
}


int frequency(graph* grafo, int ID) {
    if(ID > grafo->starting_ID && ID - grafo->starting_ID < grafo->length) {
        return max((grafo->adjacency[ID - grafo->starting_ID][1] + 1) - 2, grafo->incoming_degrees[ID - grafo->starting_ID]);
    }
    return 0;
}

void print_adjacency(int** adjacency, int starting_ID, int length) {
    for(int i=0; i<length; i++) {
        if(adjacency[i][1] == 1) {
            printf("Elemento %d: \tvuoto\n", i + starting_ID);
        }
        else {
            printf("Elemento %d: \t", i + starting_ID);

            for (int j = 2; j <= adjacency[i][1]; j++) {
                printf("%d  ", adjacency[i][j]);
            }
            printf("\n");
        }
    }
}

void print_incoming_degrees(int* incoming_degrees, int starting_ID, int length) {
    int best [number_most_frequent_words];
    for(int i=0; i<number_most_frequent_words; i++) {
        best[i] = -1;
    }

    for(int i=0; i<length; i++) {
        for(int j=0; j<number_most_frequent_words; j++) {
            if(best[j] == -1) {
                best[j] = i;
                break;
            }
            else if(incoming_degrees[i] > incoming_degrees[best[j]]) {
                int temp = best[j];
                best[j] = i;

                for(int k=j+1; k<number_most_frequent_words; k++) {
                    // scambiare best[k] e temp
                    int temp1 = best[k];
                    best[k] = temp;
                    temp = temp1;
                }

                break;
            }
        }
        printf("Incoming Degree of %d:\t%d\n", i + starting_ID, incoming_degrees[i]);
    }
    printf("Best %d (incoming):\t", number_most_frequent_words);
    for(int i=0; i<number_most_frequent_words; i++) {
        printf("%d\t", best[i] + starting_ID);
    }
    printf("\n");
}

void print_outcoming_degrees(int** adjacency, int starting_ID, int length) {
    int best[number_most_frequent_words];
    for(int i=0; i<number_most_frequent_words; i++) {
        best[i] = -1;
    }

    for(int i=0; i<length; i++) {
        for(int j=0; j<number_most_frequent_words; j++) {
            if(best[j] == -1) {
                best[j] = i;
                break;
            }
            else if(adjacency[i][1] > adjacency[best[j]][1]) {
                int temp = best[j];
                best[j] = i;

                for(int k=j+1; k<number_most_frequent_words; k++) {
                    // scambiare best[k] e temp
                    int temp1 = best[k];
                    best[k] = temp;
                    temp = temp1;
                }

                break;
            }
        }

        printf("Outcoming Degree of %d:\t%d\n", i + starting_ID, adjacency[i][1]+1-2);
    }
    printf("Best %d (outcoming):\t", number_most_frequent_words);
    for(int i=0; i<number_most_frequent_words; i++) {
        printf("%d\t", best[i] + starting_ID);
    }
    printf("\n");
}

// array deve essere già inizializzato come array di tre interi ai quali deve essere stato assegnato un valore...
// per esempio array[1] = 0; array[1] = frequency[grafo1, ID); array[2] = frequency[grafo2, ID);
void build_common_paths(int* array, int* visitati, int index, int length, graph* grafo1, graph* grafo2, Dizionario* dictionary, int ID, int counter) {
    // costruisco un array di tre interi; array[0] rappresenta il numero di nodi contenuti in cammini comuni che partono da ID (eccetto ID);
    // array[1] è la somma delle frequenze dei nodi contenuti nel cammino, con le frequenze calcolate secondo il primo grafo...
    // array[2] è la somma delle frequenze dei nodi contenuti nel cammino, calcolate dal secondo grafo...
    // entrambi questi valori li considero come una stima dell'importanza del cammino nei due grafi.

    // counter rappresenta la profondità massima dei cammini che partono dal nodo che considero...
    // impongo un limite...
    if(counter > maximum_depth) {
        return;
    }

    if(ID < grafo1->starting_ID || ID < grafo2->starting_ID || ID - grafo1->starting_ID >= grafo1->length || ID - grafo2->starting_ID >= grafo2->length)
        return;


    // ATTENZIONE ALL'ESISTENZA DI CICLI!
    if(index < length) {
        visitati[index] = ID;
        index++;
    }
    else if(index == length) {
        int* arr = (int*) malloc(2*length*sizeof(int));
        for(int i=0; i<length; i++) {
            arr[i] = visitati[i];
        }
        arr[length] = ID;
        free(visitati);

        index++;
        length *= 2;
        visitati = arr;
    }

    for(int i=2; i < grafo1->adjacency[ID - grafo1->starting_ID][1] + 1; i++) {
        // l'elemento grafo1->adjacency[ID1][i] è un elemento "vicino" a ID1...

        for (int j = 2; j < grafo2->adjacency[ID - grafo2->starting_ID][1] + 1; j++) {
            if (grafo2->adjacency[ID - grafo2->starting_ID][j] == grafo1->adjacency[ID - grafo1->starting_ID][i]) {
                // guardo se ho un ciclo!
                if(contains(visitati, index-1, grafo1->adjacency[ID - grafo1->starting_ID][i]) == 1) {
                    break;
                }

                // la parola è contenuta nel secondo testo ed è "vicina" anche a ID2
                array[0]++;
                array[1] += frequency(grafo1, grafo1->adjacency[ID - grafo1->starting_ID][i]);
                array[2] += frequency(grafo2, grafo2->adjacency[ID - grafo2->starting_ID][j]);

                // considero una copia altrimenti ho problemi di memory leak!
                int* visited = (int*) malloc(length*sizeof(int));
                for(int k=0; k<index; k++) {
                    visited[k] = visitati[k];
                }

                for(int i=0; i<counter; i++) {
                    printf("|");
                }
                printf(" %s\n", dictionary->array[ID]);

                counter = counter + 1;
                build_common_paths(array, visited, index, length, grafo1, grafo2, dictionary, grafo1->adjacency[ID - grafo1->starting_ID][i], counter);

                //printf("%s - %s con importanza %d\n", dictionary->array[ID], dictionary->array[grafo1->adjacency[ID - grafo1->starting_ID][i]], min(array[1], array[2]));

                counter = counter - 1;

                break;
            }
        }
    }

    free(visitati);
}

/*
// devo visitare il grafo mediante DFS e poi individuare un ciclo!
void Visita(int ID, graph* grafo, int* visitati) {
    visitati[ID] = 1;
    // printf("Nodo %d visitato.\n", ID);
    for(int i=2; i<grafo->adjacency[ID][1]+1; i++) {
        if(visitati[grafo->adjacency[ID][i]] == 0) {
            Visita(grafo->adjacency[ID][i], grafo, visitati);
        }
    }
}
void DFS(graph* grafo) {
    // devo sapere quali sono i nodi già visitati: uso un array di int (gli ID)
    int* visitati = malloc((grafo->dictionary->last_id+1)*sizeof(int));
    for(int i=0; i<grafo->dictionary->last_id+1; i++) {
        visitati[i] = 0; // 0 significa non visitato, 1 visitato
    }
    
    for(int i=0; i<grafo->dictionary->last_id+1; i++) {
        if(visitati[i] == 0) {
            Visita(i, grafo, visitati);
        }
    }
}
 */

/*
//Trovo un ciclo
void VisitaCiclo(int ID, Dizionario* dictionary, int** adjacency, int* visitati, int* lista_visita, int dimensione) {
    visitati[ID] = 1;
    for(int i=2; i<adjacency[ID][1]+1; i++) {
        if(visitati[adjacency[ID][i]] == 0) {
            lista_visita[dimensione] = adjacency[ID][i];
            dimensione++;
            VisitaCiclo(adjacency[ID][i], dictionary, adjacency, visitati, lista_visita, dimensione);
        }
        else {
            // ho trovato un elemento già visitato, ho un ciclo
            printf("Ciclo:  ");
            for(int i=0; i<dimensione; i++) {
                printf("%d  ", lista_visita[i]);
            }
            printf("\n");
            return;
        }
    }
}
void DFSCiclo(Dizionario* dictionary, int** adjacency) {
    // devo sapere quali sono i nodi già visitati: uso un array di int (gli ID)
    int* visitati = malloc((dictionary->last_id+1)*sizeof(int));
    for(int i=0; i<dictionary->last_id+1; i++) {
        visitati[i] = 0; // 0 significa non visitato, 1 visitato
    }
    
    for(int i=0; i<dictionary->last_id+1; i++) {
        if(visitati[i] == 0) {
            int* lista_visita = malloc((dictionary->last_id+1)*sizeof(int));
            lista_visita[0] = i;
            int dimensione = 1;
            VisitaCiclo(i, dictionary, adjacency, visitati, lista_visita, dimensione);
        }
    }
}*/

int is_common_keyword(char* string) {
    for(int i=0; i<number_common_keywords; i++) {
        if(string == NULL) {
            return 0;
        }
        else if(strcmp(string, common_keywords[i]) == 0) // se sono uguali restituisce 0
            return 0;
    }
    return 1;
} // 0->la parola è una stopword, 1->non lo è.

char** remove_stopwords(char** strings, int* length) {
    char** strings_new = (char**) malloc(*length*sizeof(char*));
    int length_new = 0;
    for(int i=0; i<*length; i++) {
        if(is_common_keyword(strings[i]) == 1) { // non è una common keyword
            strings_new[length_new] = strings[i];
            length_new++;
        }
        else {
            if(strings[i] != NULL)
                free(strings[i]);
        }
    }
    char** strings_def = (char**) malloc(length_new*sizeof(char*));
    for(int i=0; i<length_new; i++) {
        strings_def[i] = strings_new[i];
    }
    free(strings_new);
    *length = length_new;

    return strings_def;
}


void build_high_frequencies(graph* grafo) {
    for(int i=0; i<grafo->length; i++) {
        if(grafo->adjacency[i][1] != 1) { // altrimenti la parola non è contenuta nel primo testo
            int freq = frequency(grafo, i + grafo->starting_ID); // somma outcoming degree e incoming degree

            for (int j = 0; j < number_most_frequent_words; j++) {
                if (grafo->high_frequencies[j] == -1) {
                    grafo->high_frequencies[j] = i + grafo->starting_ID;
                    break;
                }
                else {
                    int freq_j = frequency(grafo, grafo->high_frequencies[j]);

                    if (freq > freq_j) {
                        int temp = grafo->high_frequencies[j];
                        grafo->high_frequencies[j] = i + grafo->starting_ID;

                        // scambiare temp con high_frequencies[k], con k > j...
                        for (int k = j + 1; k < number_most_frequent_words; k++) {
                            int temp1 = grafo->high_frequencies[k];
                            grafo->high_frequencies[k] = temp;
                            temp = temp1;
                        }

                        break;
                    }
                }
            }
        }
    }
}


graph* build_graph(char* str, Dizionario* dictionary) {
    // Uso mmapper per leggere il file che ha nome str
    int size;
    byte* file;
    map(str, &size, &file);

    // Uso la funzione getStrings per ottenere un array di stringhe a partire dall'array di byte...
    // Poi inserisco ogni elemento dell'array di byte all'interno di dictionary: in questo modo ad ogni stringa viene univocamente assegnato un ID...
    // A questo punto devo visitare l'albero e costruire il grafo mediante liste di adiacenza (array di array)...
    // La lista di adiacenza (che è un array) viene costruito su interi: invece di considerare le stringhe considero il loro ID univoco...

    if(size == 0) {
        // ho un file vuoto
        return NULL;
    }

    int ssize;
    char** strings;
    getStrings(file, size, &strings, &ssize);

    //printf("getStrings eseguita. ssize=%d\n", ssize);
    
    // rimuovere stopwords: ATTENZIONE, all'interno di remove_stopwords sto usando una copia del puntatore, se lo faccio puntare a qualcos'altro non cambia niente!
    char** strings_new = remove_stopwords(strings, &ssize);
    free(strings);
    strings = strings_new;
    
    int minimum_ID = -1; // mi serve per calcolare grafo->starting_ID

    for(int i=0; i<ssize; i++) {
        int id = inserisci(dictionary, strings[i]);
        if(id == -1) {
            // ERRORE!
            printf("Errore!\n");
        }
        else if(minimum_ID == -1) {
            minimum_ID = id;
        }
        else if(id < minimum_ID) {
            minimum_ID = id;
        }
    }

    //printf("Stampo il dizionario:\n");
    //print_dict(dictionary->node, 0);
    

    // Costruisco il grafo mediante liste di adiacenza
    int** adjacency = (int**) malloc((dictionary->last_id+1 - minimum_ID)*sizeof(int*));
    int* incoming_degrees = (int*) malloc((dictionary->last_id+1 - minimum_ID)*sizeof(int));

    for(int i=0; i<dictionary->last_id+1 - minimum_ID; i++) {
        adjacency[i] = (int*) malloc(2*sizeof(int));
        adjacency[i][0] = 2;
        adjacency[i][1] = 1;

        incoming_degrees[i] = 0;
    }


    for(int i=0; i<ssize; i++) { // prendo ssize ma in realtà nella lista di adiacenza gli elementi sono indicizzati mediante ID (va bene)
        // adjacency[i] contiene tutti gli ID j di stringhe tali che nel documento considerato esiste una frase in cui la stringa i è seguita dalla stringa j...

        // adjacency[i][0] è la dimensione dell'array adjacency[i] (in cui però non è detto che ho inserito tanti elementi quanto è la dimensione dell'array stesso), adjacency[i][1] è l'indice dell'ultimo elemento inserito... 
        // [NB uso la tecnica per cui ogni volta che arrivo alla fine dell'array lo duplico, invece di ridimensionarlo ad ogni inserimento]

        // Considero adesso la stringa strings[i]: devo inserire nella lista di adiacenza di strings[i] la stringa strings[i+1] se non c'è già;
        // la lista di adiacenza di strings[i] è adjacency[ricerca(dictionary, strings[i])]; 
        // infatti ricerca(dictionary, strings[i]) restituisce l'ID univoco di strings[i]...

        int ID = ricerca(dictionary->node, strings[i]);

        if (ID != -1) {
            if (i + 1 < ssize)
            {
                // la lista deve contenere almeno tre elementi: il primo è la lunghezza dell'array adjacency[ID], il secondo è l'indice dell'ultimo elemento inserito, poi ci deve essere almeno un elemento inserito.
                // se l'array è pieno, devo duplicarlo
                if (adjacency[ID - minimum_ID][1] + 1 < adjacency[ID - minimum_ID][0]) {
                    // l'array ha posto per un altro elemento: devo verificare che l'elemento che devo inserire non sia già presente, ipotizzando che l'array sia già ordinato.
                    int id_insert = ricerca(dictionary->node, strings[i + 1]);
                    incoming_degrees[id_insert - minimum_ID]++;

                    int n = 2;
                    while (n <= adjacency[ID - minimum_ID][1] && adjacency[ID - minimum_ID][n] < id_insert) {
                        n++;
                    }

                    if (adjacency[ID - minimum_ID][n] != id_insert) { // altrimenti l'elemento è già stato inserito e allora non c'è niente da fare.
                        if (n == adjacency[ID - minimum_ID][1] + 1) // l'elemento va inserito in fondo e c'è lo spazio per farlo!
                        {
                            adjacency[ID - minimum_ID][n] = id_insert;
                            adjacency[ID - minimum_ID][1] = n;
                        }
                        else {
                            int temp = adjacency[ID - minimum_ID][n];
                            adjacency[ID - minimum_ID][n] = id_insert;

                            int j = n + 1;
                            while (j <= adjacency[ID - minimum_ID][1]) {
                                int temp1 = adjacency[ID - minimum_ID][j];
                                adjacency[ID - minimum_ID][j] = temp;
                                temp = temp1;

                                j++;
                            }
                            adjacency[ID - minimum_ID][adjacency[ID - minimum_ID][1] + 1] = temp;
                            adjacency[ID - minimum_ID][1] = adjacency[ID - minimum_ID][1] + 1;
                        }
                    }
                }
                else { // devo verificare se l'elemento da inserire già c'è; se non c'è devo aumentare la dimensione dell'array...
                    // qui adjacency[ID][1] + 1 >= adjacency[ID][0]
                    int id_insert = ricerca(dictionary->node, strings[i + 1]);
                    incoming_degrees[id_insert - minimum_ID]++;

                    int inserted = 0; // false
                    for (int k = 2; k <= adjacency[ID - minimum_ID][1]; k++) {
                        if (adjacency[ID - minimum_ID][k] == id_insert) {
                            inserted = 1;
                            break;
                        }
                    }

                    if (inserted == 0) {
                        // duplicare l'array
                        int *arr = (int *) malloc(2 * (adjacency[ID - minimum_ID][0]) * sizeof(int));
                        arr[0] = 2 * adjacency[ID - minimum_ID][0]; // raddoppio la dimensione
                        arr[1] = adjacency[ID - minimum_ID][1] + 1;
                        int position = 2;
                        for (int j = 2; j < adjacency[ID - minimum_ID][1] + 1; j++) {
                            if (adjacency[ID - minimum_ID][j] < id_insert) {
                                arr[j] = adjacency[ID - minimum_ID][j];
                                position++;
                            }
                            else {
                                arr[j + 1] = adjacency[ID - minimum_ID][j];
                            }
                        }
                        arr[position] = id_insert;

                        free(adjacency[ID - minimum_ID]);
                        adjacency[ID - minimum_ID] = arr;
                    }
                }
            }
        }
        else {
            // la stringa non è stata trovata nel dizionario -> qualcosa è andato storto.
            printf("Parola non trovata! Qualcosa non ha funzionato. (file graph.h)\n");
        }
    }
    
    //print_adjacency(adjacency, dictionary->last_id+1);
    //printf("\n\n");
    //print_incoming_degrees(incoming_degrees, dictionary->last_id+1);
    //printf("\n\n");
    //print_outcoming_degrees(adjacency, dictionary->last_id+1);
    
	graph* grafo = nuovo_grafo();
	grafo->adjacency = adjacency;
    grafo->incoming_degrees = incoming_degrees;
    grafo->length = dictionary->last_id + 1 - minimum_ID;

    grafo->starting_ID = minimum_ID;

    build_high_frequencies(grafo);

	return grafo;
}



// ---------------------------------------------------------------------------------------------------------------------
// // SIMILARITY COMPUTATION
// ---------------------------------------------------------------------------------------------------------------------

unsigned long long compute_similarity(graph* grafo1, graph* grafo2, Dizionario* dictionary) {
    unsigned long long n = 0;

    // -----------------------------------------------------------------------------------------------------------------
    // individuazione gruppi di parole e parole rilevanti
    // -----------------------------------------------------------------------------------------------------------------


    // Considero tutte le parole più rilevanti e cerco di costruire cammini comuni tra il primo testo e il secondo...
    // in base al numero di parole contenuto in questi cammini comuni aumento il grado di somiglianza...


    for(int i=0; i<number_most_frequent_words; i++) {
        for (int j = 0; j < number_most_frequent_words; j++) {
            if (contains(grafo2->high_frequencies, number_most_frequent_words, grafo1->high_frequencies[i]) == 1) {

                //----------PRIMO CALCOLO DELLA SOMIGLIANZA----------
                int *array = (int *) malloc(3 * sizeof(int));
                array[0] = 0;
                array[1] = frequency(grafo1, grafo1->high_frequencies[i]);
                array[2] = frequency(grafo2, grafo2->high_frequencies[j]);

                int *visitati = (int *) malloc(8 * sizeof(int));
                int length = 8;
                int index = 0;

                build_common_paths(array, visitati, index, length, grafo1, grafo2, dictionary, grafo1->high_frequencies[i], 0);

                // primo calcolo della somiglianza
                n += (unsigned long long)  array[0] * min(array[1], array[2]);
                free(array);


                //----------SECONDO CALCOLO DELLA SOMIGLIANZA----------
                int frequency_i = frequency(grafo1, grafo1->high_frequencies[i]);
                int frequency_j = frequency(grafo2, grafo2->high_frequencies[j]);
                n += (unsigned long long) log(1 + min(frequency_i, frequency_j));
            }
        }
    }

    // A partire dalle parole in comune individuate cerco di vedere se queste parole sono contenute in gruppi di parole rilevanti;

    // -----------------------------------------------------------------------------------------------------------------

    return n;
}


#endif