#ifndef _DIZIONARIO_H_
#define _DIZIONARIO_H_

#include <string.h>
#include <stdlib.h>


typedef struct {
	char* key;
	int id;
} entry;

typedef struct nodo {
    entry* value;
    struct nodo* left;
    struct nodo* right;
} DNode;

typedef struct {
    DNode* node;
    char** array;
    int last_id;
    int length;
} Dizionario;



DNode* nuovo_nodo()
{
    DNode* nodo1 = (DNode*) malloc(sizeof(DNode));
    nodo1->value = NULL;
    nodo1->left = NULL;
    nodo1->right = NULL;

    return nodo1;
}

Dizionario* nuovo_dizionario()
{
    Dizionario* dict = (Dizionario*) malloc(sizeof(Dizionario));
    dict->node = nuovo_nodo();
    dict->array = NULL;
    dict->last_id = -1;
    dict->length = 0;

    return dict;
}

void print_dict(DNode* node, int indent) {
    if(node != NULL && node->value != NULL) {
        int i = 0;
        for(i=0; i<indent; i++) {
            printf("|");
        }
        printf("%s\t%d\n", node->value->key, node->value->id);

        print_dict(node->left, indent+1);
        print_dict(node->right, indent+1);
    }
}

//ritorna un valore <, >, = a 0 quando e1 è rispettivamente <, > = a e2
int compara(entry* e1, entry* e2)
{
	return strcmp(e1->key, e2->key);
}

//ritorna 0 se l'elemento è stato inserito correttamente, 1 altrimenti (codice di errore)
int inserisci_rec(DNode* nodo, entry* e)  // niente controllo del bilanciamento
// restituisce 0 se l'inserimento è andato a buon fine, altrimenti restituisce -1
{
    // Questo è un grosso errore in C: un riferimento nullo punta al niente, non ci posso inserire! Non sto passando l'indirizzo del nuovo oggetto creato a nessuno...
    /*if(nodo == NULL) {
        nodo = nuovo_nodo();
        nodo->value = e;
        return 0;
    }*/
    
    if(nodo->value == NULL) {
        nodo->value = e;
        nodo->left = nuovo_nodo();
        nodo->right = nuovo_nodo();
        return 0;
    }
    else {
        if(compara(nodo->value, e) > 0) {
            return inserisci_rec(nodo->left, e);
        }
        else if(compara(nodo->value, e) < 0) {
            return inserisci_rec(nodo->right, e);
        }
        else {
            return -1; // errore: ho trovato l'entry da inserire nella struttura dati.
        }
    }
}

//ritorna l'ID associato alla key se presente, -1 altrimenti
int ricerca(DNode* dizionario, char* key)
{
    if(key != NULL) {
        if (dizionario != NULL && dizionario->value != NULL) {
            if (strcmp(dizionario->value->key, key) > 0) {
                return ricerca(dizionario->left, key);
            }
            else if (strcmp(dizionario->value->key, key) < 0) {
                return ricerca(dizionario->right, key);
            }
            else {
                return dizionario->value->id;
            }
        }
        else {
            return -1;
        }
    }
    return -1;
}


entry* inserisci_arr(Dizionario* dizionario, char* key) {
    // so già che la chiave non si trova in array
    int id = dizionario->last_id + 1;
    dizionario->last_id = id;

    if(dizionario->length > id) {
        dizionario->array[id] = key;
        entry* e = (entry*) malloc(sizeof(entry));
        e->key = key;
        e->id = id;

        return e;
    }
    else if(dizionario->length == id) {
		char** arr;
		int lunghezza = dizionario->length;
		if (lunghezza == 0) // l'array non è mai stato usato
		{
			arr = (char**) malloc(4*sizeof(char*));
			dizionario->length = 4;
		}
		else {
			// duplicare la lunghezza dell'array e poi inserire
        	arr = (char**) malloc(2*(lunghezza)*sizeof(char*));
			dizionario->length = 2*lunghezza;
		}
        for(int i=0; i<lunghezza; i++) {
            arr[i] = dizionario->array[i];
        }
        free(dizionario->array);

        dizionario->array = arr;

        dizionario->array[id] = key;
        entry* e = (entry*) malloc(sizeof(entry));
        e->key = key;
        e->id = id;

        return e;
    }

    // questo caso non dovrebbe mai essere raggiunto
    entry* e = (entry*) malloc(sizeof(entry));
    e->key = NULL;
    e->id = -1;
    return e;
}


//controlla che l'elemento non sia già presente nel dizionario, e se non lo è lo inserisce.
int inserisci(Dizionario* dizionario, char* key)
{
    if(dizionario == NULL) {
        return -1;
    }
    
	int result = ricerca(dizionario->node, key);
    if(result == -1) {
        entry* e = inserisci_arr(dizionario, key); //genera un ID e lo inserisci in dizionario->array
		if (inserisci_rec(dizionario->node, e) == -1) {  //0 -> inserimento a buon fine, -1 -> errore
            return -1;
        }
        else {
            return e->id;
        }
    }
    else
    {
        return result; // ID dell'elemento (che era già stato inserito)
    }
}



#endif