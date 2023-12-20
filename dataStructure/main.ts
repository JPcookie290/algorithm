class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: ListNode | null = null;
    tail: ListNode | null = null;
    length: number = 0;

    //Add Item at the end of the list
    append(value: number) {
        const newNode = new ListNode(value);
        if(!this.head){
            this.head = newNode;
            //this.tail = this.head;
        } else {
            this.tail!.next = newNode;
            //this.tail = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    //remove last item and set new tail
    pop(){
        if (!this.head) {
            return undefined
        }
        let pre: ListNode | null = null;
        let temp = this.head;
        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail!.next = null;
        this.length--;
        return temp;

        /*
        let currentItem = this.head;
        while (currentItem) {
            currentItem = currentItem.next;
        }
        */
        //return knoten
    }

    //remove the first item of the list
    shift(){
        if (!this.head) return undefined;
        const temp = this.head;
        this.head = temp.next;
        this.length--
        if (this.length === 0) this.tail = null;
        return temp;
    }

    //Add item at the beginning of the list
    unshift(value: number){
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
    }

    //get a node from specific index
    get(index: number){
        if (index < 0 || index >= this.length) return undefined;       
        let currentItem = this.head;
        let counter = 0
        while (counter !== index) {
            currentItem = currentItem?.next as ListNode;
            counter++;
        }
        return currentItem
    }
}

const myList = new SinglyLinkedList();
myList.append(5);
myList.append(25);
myList.append(35);
myList.append(55);
myList.append(65);
myList.append(75);
console.log(myList);
myList.pop();
console.log(myList);
myList.shift();
console.log(myList);



/*
const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head);
*/