"use strict";
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            //this.adjacencyList.get(vertex1)!.splice(this.adjacencyList.get(vertex1)!.indexOf(vertex2), 1);
            //this.adjacencyList.get(vertex2)!.splice(this.adjacencyList.get(vertex2)!.indexOf(vertex1), 1);
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1).filter((a) => a !== vertex2));
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2).filter((a) => a !== vertex1));
        }
    }
    removeVertex(vertex) {
        var _a, _b;
        //console.log(this.adjacencyList.has(vertex));
        //console.log(this.adjacencyList.get(vertex));
        //this.adjacencyList.get(vertex)!.forEach(element => {
        //    console.log(this.adjacencyList.get(element));
        //});
        while ((_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.length) {
            this.removeEdge(vertex, (_b = this.adjacencyList.get(vertex)) === null || _b === void 0 ? void 0 : _b.pop());
        }
        this.adjacencyList.delete(vertex);
    }
}
//Test
const graph = new Graph();
const airports = ["Berlin", "Wien", "London", "Barcelona"];
airports.forEach(element => {
    graph.addVertex(element);
});
graph.addEdge("Berlin", "Wien");
graph.addEdge("Berlin", "London");
graph.addEdge("Berlin", "Barcelona");
graph.addEdge("Wien", "Barcelona");
console.log(graph.adjacencyList);
graph.removeEdge("Berlin", "Wien");
console.log(graph.adjacencyList);
graph.removeVertex("London");
console.log(graph.adjacencyList);
//# sourceMappingURL=graph.js.map