#ifndef _LINKED_LIST_H
#define _LINKED_LIST_H

#include<stdlib.h>
#include<stdio.h>
#include "graph.h"

struct item {
    int value;
    struct item* next;
};

typedef struct item llitem;



struct graphItem {
    graph* value;
    char* file_name;
    struct graphItem* next;
};

typedef struct graphItem llgraph;

#endif
