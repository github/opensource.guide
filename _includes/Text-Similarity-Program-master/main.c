#include<dirent.h>
#include "graph.h"
#include "linked_list.h"

#define length_file_names 9

#define similarity_level 1500


int is_txt_file(char* string) {
	int length = 0;
	while(string[length] != '\0') {
		length++;
	}
	if(string[length-4] == '.') {
		if(string[length-3] == 't') {
			if(string[length-2] == 'x') {
				if(string[length-1] == 't') {
					return 1;
				}
			}
		}
	}
	return 0;
}

int are_similar(unsigned long long** similarities, int n) {
	// ho un array di somiglianze (similarities) di dimensione n; prendo infatti in considerazione n testi di cui voglio capire
	// se possono appartenere ad uno stesso gruppo semantico. L'array similarities dunque contiene n entrate ad ognuna delle quali
	// è associato un array di numeri che rappresentano la somiglianza del testo associato all'indice in considerazione con tutti
	// i testi che hanno indici maggiori di quello in questione.

	for(int i=0; i<n; i++) {
		for(int j=i+1; j<n; j++) {
			if(similarities[i][j] <= similarity_level)
				return 0;
		}
	}
	return 1;
}
// 0 -> le parole in questione non possono appartenere ad uno stesso gruppo semantico; 1 -> le parole possono appartenere ad uno stesso gruppo semantico

void print_high_frequencies(graph* grafo, Dizionario* dictionary) {
	for(int i=0; i<number_most_frequent_words; i++) {
		printf("\t%s\n", dictionary->array[grafo->high_frequencies[i]]);
	}
}


int main(int argc, char** argv) {
	Dizionario* dictionary = nuovo_dizionario();

	int number_of_files = 0;
	llgraph* grafi = (llgraph*) malloc(sizeof(llgraph));
	grafi->next = NULL;
	grafi->value = NULL;
	grafi->file_name = NULL;

	llgraph* pointer = grafi;

	DIR* d;
	struct dirent *dir;
	d = opendir("/Users/Paolo/Desktop/ALGORITMI2/PROGETTO/wiki");
	if(d != NULL)
	{
		printf("Opening: ...\n");
		while ((dir = readdir(d)) != NULL)
		{
			if(is_txt_file(dir->d_name) == 1) {
				number_of_files++;

				char path[55] = "/Users/Paolo/Desktop/ALGORITMI2/PROGETTO/wiki/";
				for(int i=46; i<46+length_file_names; i++) {
					path[i] = dir->d_name[i-46];
				}
				printf("\t%s\n", path);

				pointer->value = build_graph(path, dictionary);
				pointer->file_name = (char*) malloc(length_file_names*sizeof(char));
				strcpy(pointer->file_name, dir->d_name);

				pointer->next = (llgraph*) malloc(sizeof(llgraph));
				pointer->next->value = NULL;
				pointer->next->next = NULL;
				pointer->next->file_name = NULL;

				pointer = pointer->next;
			}
		}
		printf("\nNumber of files opened: %d\n\n", number_of_files);

		printf("Parole significative: \n");
		int i = 0;
		llgraph* temp = grafi;
		while(temp != NULL && temp->value != NULL) {
			printf("Testo %d:\n", i);
			print_high_frequencies(temp->value, dictionary);
			temp = temp->next;
			i++;
		}

		printf("\n");

		closedir(d);
	}

	pointer = NULL;


	// -------------------- CALCOLO SOMIGLIANZA TESTI (A DUE A DUE) --------------------

	unsigned long long** similarities = (unsigned long long**) malloc((number_of_files-1) * sizeof(unsigned long long*));
	char** file_names = (char**) malloc((number_of_files)*sizeof(char*));

	int i=0;
	while(grafi != NULL && grafi->file_name != NULL) { // ATTENZIONE: qualche file potrebbe essere vuoto e dunque il suo grafo NULL; tuttavia file_name non è NULL!
		file_names[i] = (char*) malloc(length_file_names*sizeof(char));
		strcpy(file_names[i], grafi->file_name);

		int j=0;
		printf("Calcolo somiglianze con %s...\n", grafi->file_name);
		llgraph* ptr = grafi->next;
		if(ptr != NULL && ptr->file_name != NULL) { // mi assicura che ptr si riferisca ad un file esistente
			similarities[i] = (unsigned long long*) malloc((number_of_files-i-1)*sizeof(unsigned long long));

			while(ptr != NULL && ptr->file_name != NULL) {
				if(ptr->value == NULL)
				{
					similarities[i][j] = 0;
				}
				else {
					similarities[i][j] = compute_similarity(grafi->value, ptr->value, dictionary);
					// NB similarities[i][j] rappresenta la somiglianza fra l'elemento i e l'elemento j+i+1

					//printf("\t%s) %llu\n", ptr->file_name, similarities[i][j]);
				}

				ptr = ptr->next;
				j++;
			}
		}

		llgraph* temp = grafi;
		grafi = grafi->next;

		free(temp->value);
		free(temp->file_name);
		free(temp);

		i++;
	}

	free(grafi);
	free(dictionary);
	grafi = NULL;
	dictionary = NULL;



	// -------------------- DIVISIONE DEI TESTI IN CLUSTER SEMANTICI --------------------
	// (in ogni cluster inserisco tutte le parole che hanno una somiglianza con le altre superiore a 1000)
	printf("\nCreazione cluster semantici:\n");

	int* used = (int*) malloc(number_of_files*sizeof(int));
	for(i=0; i<number_of_files; i++)
		used[i] = 0;

	int num_cluster = 1;
	for(i=0; i<number_of_files-1; i++) { // l'ultimo elemento lo considero dopo
		if(used[i] == 0) {
			int length = 8;
			int index = 1;
			int* cluster = (int*) malloc(8*sizeof(int));
			cluster[0] = i;

			printf("Cluster semantico #%d:", num_cluster);
			printf(" %s", file_names[i]);
			used[i] = 1;

			for (int j=i+1; j<number_of_files; j++) {
				if(used[j] == 0) {
					if (similarities[i][j-i-1] > similarity_level) { // similarities[i][j-i-1] somiglianza tra i e j...
						// aggiungere a cluster[index-1]? Solo se è simile anche a tutti gli altri elementi simili a i...
						// in clusters[index-1] devo metterci tutti gli elementi che appartengono allo stesso gruppo semantico di i...
						int add = 1;
						for (int k = 0; k < index; k++) {
							if (similarities[cluster[k]][j-cluster[k]-1] <= similarity_level) { // similarities[k][j-k-1] <= similarity_level
								add = 0;
								break;
							}
						}
						if (add == 1) {
							printf(" %s", file_names[j]);
							// aggiungo a clusters[index-1]
							if (index < length) {
								cluster[index] = j;
								index++;
							}
							else {
								int* arr = (int*) malloc(2 * length * sizeof(int));
								length *= 2;
								index++;
								for (int k = 0; k < index - 1; k++) {
									arr[k] = cluster[k];
								}
								arr[index - 1] = j;
								free(cluster);
								cluster = arr;
							}
							used[j] = 1;
						}
					}
				}
			}
			num_cluster++;
			printf("\n");
		}
	}
	if(used[number_of_files-1] == 0) {
		// aggiungilo ad un altro cluster in cui c'è solo lui...
		num_cluster++; // SERVE?
		printf("Cluster semantico #%d: %s\n", num_cluster, file_names[number_of_files - 1]);
	}

	//free similarities & clusters & used
	free(similarities);
}
