class ListNodeDouble<T> {
    value: T;
    next: ListNodeDouble<T> | null = null;
    prev: ListNodeDouble<T> | null = null;

    constructor(value: T){
        this.value = value;
    }
}

class DoublyLinkedList<T> {
    head: ListNodeDouble<T> | null = null;
    tail: ListNodeDouble<T> | null = null;
    length: number = 0;

    constructor() {

    }
}

const myListDouble = new DoublyLinkedList<string>();