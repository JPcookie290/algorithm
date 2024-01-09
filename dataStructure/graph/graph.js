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
            //Chritoph:
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1).filter((a) => a !== vertex2));
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2).filter((a) => a !== vertex1));
        }
    }
    removeVertex(vertex) {
        this.adjacencyList.get(vertex).forEach(element => {
            this.removeEdge(element, vertex);
        });
        this.adjacencyList.delete(vertex);
        //Chritoph:
        //while(this.adjacencyList.get(vertex)?.length){
        //    this.removeEdge(vertex, this.adjacencyList.get(vertex)?.pop() as T)
        //}
    }
    depthFirst(startVertex) {
        //wenn iterativ
        const stack = [startVertex]; //push, pop
        const result = [];
        const visted = {};
        visted[startVertex] = true;
        visted.Berlin;
        //do something
        while (stack.length) { }
        return result;
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
//console.log(graph.adjacencyList);
//graph.removeEdge("Berlin", "Wien");
//console.log(graph.adjacencyList);
//graph.removeVertex("London");
console.log(graph.adjacencyList);
//# sourceMappingURL=graph.js.map