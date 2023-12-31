"use strict";
class TreeNode {
    value;
    left = null;
    right = null;
    constructor(val) {
        this.value = val;
    }
}
class Tree {
    root = null;
    //build a tree only with numbers
    buildTree(data, start = 0, end = data.length - 1) {
        if (start > end)
            return null;
        //sort the array
        data.sort((a, b) => a - b);
        //Create new Node with mid Value from Array
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode(data[mid]);
        //recursive function call with right and left
        node.left = this.buildTree(data, start, mid - 1);
        node.right = this.buildTree(data, mid + 1, end);
        return (this.root = node);
    }
    //Insert Methode iterative
    insert(val) {
        const newNode = new TreeNode(val);
        if (!this.root)
            return this.root = newNode;
        let current = this.root;
        while (true) {
            if (val === current.value)
                return;
            if (val < current.value) {
                if (!current.left) {
                    return (current.left = newNode);
                }
                ;
                current = current.left;
            }
            if (val > current.value) {
                if (!current.right) {
                    return (current.right = newNode);
                }
                ;
                current = current.right;
            }
        }
    }
    //Insert Methode recusive
    insertRec(val) {
        const check = (node) => {
            if (node.value === val)
                return;
            if (node.value > val) {
                //left hand side is a assignment
                check((node.left = node.left ?? new TreeNode(val)));
            }
            if (node.value < val) {
                check((node.right = node.right ?? new TreeNode(val)));
            }
        };
        check((this.root = this.root ?? new TreeNode(val)));
    }
    //Find Methode
    find(val) {
        const search = (node) => {
            if (node === null)
                return null;
            if (node.value === val)
                return node;
            /*
            if (node.value > value && node.left !== null) {
                search(node.left)
            }
            if (node.value > value && node.right !== null) {
                search(node.right)
            }
            */
            return search(node.left) ?? search(node.right);
        };
        return search(this.root) ?? -1;
    }
    //Breadth First Search Methode
    breadthFirst() {
        const queue = [];
        const visted = [];
        let currentNode = this.root;
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            visted.push(currentNode.value);
            if (currentNode.left)
                queue.push(currentNode.left);
            if (currentNode.right)
                queue.push(currentNode.right);
        }
        return visted;
    }
    //Pre-Order Methode
    preOrder() {
        const nodesValues = [];
        const check = (node) => {
            nodesValues.push(node.value);
            if (node.left)
                check(node.left);
            if (node.right)
                check(node.right);
        };
        check(this.root);
        return nodesValues;
    }
    //In-Order Methode
    inOrder() {
        const nodesValues = [];
        const check = (node) => {
            if (node.left)
                check(node.left);
            nodesValues.push(node.value);
            if (node.right)
                check(node.right);
        };
        check(this.root);
        return nodesValues;
    }
    //Post-Order Methode
    postOrder() {
        const nodesValues = [];
        const check = (node) => {
            if (node.left)
                check(node.left);
            if (node.right)
                check(node.right);
            nodesValues.push(node.value);
        };
        check(this.root);
        return nodesValues;
    }
    //Height Methode
    height(node) {
        if (!node)
            return -1;
        let leftHeight = this.height(node.left);
        let rightHeigt = this.height(node.right);
        return Math.max(leftHeight, rightHeigt) + 1;
    }
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node?.right !== null) {
        prettyPrint(node?.right, `${prefix}${isLeft ? "│ " : " "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node?.left !== null) {
        prettyPrint(node?.left, `${prefix}${isLeft ? " " : "│ "}`, true);
    }
};
//Test
const data = [5, 10, 21, 87, 301, 350];
const tree = new Tree();
tree.buildTree(data);
//tree.insert(12);
tree.insertRec(12);
prettyPrint(tree.root);
//console.log(tree.find(5));
//console.log(tree.find(12));
//console.log(tree.find(100));
//console.log("Breadth:", tree.breadthFirst());
//console.log("Pre-Order:", tree.preOrder());
//console.log("In-Order:", tree.inOrder());
//console.log("Post-Order:", tree.postOrder());
console.log("Height:", tree.height(tree.root));
//# sourceMappingURL=binaryTree.js.map