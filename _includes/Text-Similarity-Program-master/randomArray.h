#ifndef _RANDOM_ARRAY_H_
#define _RANDOM_ARRAY_H_

#include<time.h>
#include<stdlib.h>

int* randomArray(int size)

{
	int* array = malloc(size*sizeof(int));

	time_t t;
	srand((unsigned) time(&t));

	int i;
	for(i=0; i<size; i++)
	{
		array[i] = (rand()%100)-50;
	}

	return array;
}


#endif