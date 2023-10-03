// Creation of a Singly linked list

#include <iostream>
using namespace std;

class Node {
    public:
        int data;
        Node *next;
};

int main(){
    // Creation of node which points to null.
    Node *head;
    Node *one = NULL;
    Node *two = NULL;
    Node *three = NULL;

    // Allocation of memory.
    one = new Node();
    two = new Node();
    three = new Node();

    // Filling of linked list with datas.
    one->data = 1;
    two->data = 2;
    three->data = 3;

    // Connecting each list with another list to form linked list.
    one->next = two;
    two->next = three;
    three->next = NULL;

    head = one;

    while(head != NULL){
        cout << head->data << "->";
        head = head->next;
    }
}