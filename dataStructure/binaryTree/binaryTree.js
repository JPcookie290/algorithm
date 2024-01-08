"use strict";
class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
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
        var _a;
        const check = (node) => {
            var _a, _b;
            if (node.value === val)
                return;
            if (node.value > val) {
                //left hand side is a assignment
                check((node.left = (_a = node.left) !== null && _a !== void 0 ? _a : new TreeNode(val)));
            }
            if (node.value < val) {
                check((node.right = (_b = node.right) !== null && _b !== void 0 ? _b : new TreeNode(val)));
            }
        };
        check((this.root = (_a = this.root) !== null && _a !== void 0 ? _a : new TreeNode(val)));
    }
    //Find Methode
    find(val) {
        var _a;
        const search = (node) => {
            var _a;
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
            return (_a = search(node.left)) !== null && _a !== void 0 ? _a : search(node.right);
        };
        return (_a = search(this.root)) !== null && _a !== void 0 ? _a : -1;
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
        let currentNode = this.root;
        check(currentNode);
        return nodesValues;
    }
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if ((node === null || node === void 0 ? void 0 : node.right) !== null) {
        prettyPrint(node === null || node === void 0 ? void 0 : node.right, `${prefix}${isLeft ? "│ " : " "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if ((node === null || node === void 0 ? void 0 : node.left) !== null) {
        prettyPrint(node === null || node === void 0 ? void 0 : node.left, `${prefix}${isLeft ? " " : "│ "}`, true);
    }
};
//Test
const data = [5, 10, 21, 87, 301, 350];
const tree = new Tree();
tree.buildTree(data);
//tree.insert(12);
tree.insertRec(12);
prettyPrint(tree.root);
//console.log(tree.find(4));
//console.log(tree.find(12));
//console.log(tree.find(100));
console.log(tree.breadthFirst());
console.log(tree.preOrder());
//# sourceMappingURL=binaryTree.js.map