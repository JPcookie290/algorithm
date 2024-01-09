"use strict";
/*
const adjacencyList = new Map();
adjacencyList.set("A", ["B", "E"]);
adjacencyList.set("B", ["A", "C", "D"]);
adjacencyList.set("C", ["B", "D"]);
console.log(adjacencyList);
console.log(adjacencyList.get("A"));
*/
class Graph {
    adjacencyList = new Map();
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
    //Depth First Search Interative
    depthFirst(startVertex) {
        const stack = [startVertex]; //push, pop
        const result = [];
        const visted = {};
        let currentVertex = null;
        visted[startVertex] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList.get(currentVertex)?.forEach(neigbour => {
                if (!visted[neigbour]) {
                    visted[neigbour] = true;
                    stack.push(neigbour);
                }
            });
        }
        return result;
    }
    //Depth First Search Recursive       
    depthFirstRec(startVertex) {
        const result = [];
        const visted = {};
        const dfs = (vertex) => {
            if (!vertex)
                return null;
            visted[vertex] = true;
            result.push(vertex);
            this.adjacencyList.get(vertex)?.forEach(neigbour => {
                if (!visted[neigbour]) {
                    dfs(neigbour);
                }
            });
        };
        dfs(startVertex);
        return result;
    }
    //Breadth First Interative
    breadthFirst(startVertex) {
        const queue = [startVertex];
        const result = [];
        const visted = {};
        let currentVertex = null;
        visted[startVertex] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList.get(currentVertex)?.forEach(neigbour => {
                if (!visted[neigbour]) {
                    visted[neigbour] = true;
                    queue.push(neigbour);
                }
            });
        }
        return result;
    }
    //Breadth First Recursive
    breadthFirstRec(startVertex) {
        const queue = [startVertex];
        const visited = [];
        let currentVertex = null;
        const bfs = () => {
            currentVertex = queue.shift();
            visited.push(currentVertex);
            this.adjacencyList.get(currentVertex)?.slice()?.reverse()?.forEach(node => {
                if (!visited.includes(node) && !queue.includes(node)) {
                    queue.push(node);
                }
            });
            if (queue.length)
                bfs();
        };
        bfs();
        return visited;
    }
}
/* ----------- Testing ----------- */
/*
const graph = new Graph<string>();
const airports = ["Berlin", "Wien", "London", "Barcelona"]
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
*/
const graphLetters = new Graph();
const letters = ["A", "B", "C", "D", "E", "F"];
letters.forEach(letter => {
    graphLetters.addVertex(letter);
});
graphLetters.addEdge("A", "B");
graphLetters.addEdge("A", "C");
graphLetters.addEdge("B", "D");
graphLetters.addEdge("C", "E");
graphLetters.addEdge("E", "D");
graphLetters.addEdge("E", "F");
graphLetters.addEdge("F", "D");
console.log(graphLetters.depthFirst("A")); // => ["A", "C", "E", "F", "D", "B"]
console.log(graphLetters.depthFirstRec("A")); // => ["A", "B", "D", "E", "C", "F"]
console.log(graphLetters.breadthFirst("A")); // => ["A", "B", "C", "D", "E", "F"]
console.log(graphLetters.breadthFirstRec("A")); // => ["A", "C", "B", "E", "D", "F"]
//# sourceMappingURL=graph.js.map