"use strict";
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    head = null;
    tail = null;
    length = 0;
    //Add Item at the end of the list
    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            //this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            //this.tail = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    //remove last item and set new tail
    pop() {
        if (!this.head) {
            return undefined;
        }
        let pre = null;
        let temp = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
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
    shift() {
        if (!this.head)
            return undefined;
        const temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0)
            this.tail = null;
        return temp;
    }
    //Add item at the beginning of the list
    unshift(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //get a node from specific index
    get(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        let currentItem = this.head;
        let counter = 0;
        while (counter !== index) {
            currentItem = currentItem?.next;
            counter++;
        }
        return currentItem;
    }
    //change the value of a node item with a specific index
    set(value, index) {
        const node = this.get(index);
        if (node === undefined)
            return false;
        node.value = value;
        return true;
    }
    //add node on a specific index
    insert(value, index) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            return !!this.unshift(value);
        if (index === this.length)
            return !!this.append(value);
        const prevNode = this.get(index - 1);
        const newNode = new ListNode(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }
    //removes node on specific index
    remove(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        if (index === 0)
            return this.shift()?.value;
        if (index === this.length - 1)
            return this.pop()?.value;
        const prevNode = this.get(index - 1);
        const removeNode = prevNode.next;
        prevNode.next = removeNode?.next || null;
        this.length--;
        return removeNode?.value;
    }
    //reverse the list
    reverse() {
        if (this.length === 0)
            return undefined;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        while (node !== null) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
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
myList.set(100, 3);
console.log(myList);
/*
const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head);
*/ 
//# sourceMappingURL=singleLinkedList.js.map