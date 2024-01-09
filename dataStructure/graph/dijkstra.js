"use strict";
/*
Distances:
A: 0
B: 5
C: Infinity
D: 5
E: Infinity
F: Infinity
-------------------
previous
A: null
B: 'A'
C: null
D: null
E: 'B'
...
-------------------
*/
//Priority Queue                                  //in Praxis würde man eher einen Binary-Heap nehmen
class PriorityQueue {
    values = [];
    enqueue(val, priority) {
        this.values.push({ val, priority });
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}
class WeightedGraph {
    adjacencyList = new Map();
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.get(vertex1)?.push({ node: vertex2, edge: weight });
            this.adjacencyList.get(vertex2)?.push({ node: vertex1, edge: weight });
        }
    }
    dijkstraSearch(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let nextNode;
        let sumOfDist;
        let path = [];
        //init listen
        this.adjacencyList.forEach((_, key) => {
            if (key == start) {
                distances[key] = 0;
                nodes.enqueue(key, 0);
            }
            else {
                distances[key] = Infinity;
                nodes.enqueue(key, Infinity);
            }
            previous[key] = null;
        });
        //loop through graph
        while (nodes.values.length) {
            smallest = nodes.dequeue()?.val;
            //if end
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neigbor in this.adjacencyList.get(smallest)) {
                    //search for neighbor nodes
                    nextNode = this.adjacencyList.get(smallest)?.at(neigbor);
                    //calculate distances
                    sumOfDist = distances[smallest] + nextNode.edge;
                    //update lists
                    if (sumOfDist < distances[nextNode?.node]) {
                        distances[nextNode?.node] = sumOfDist;
                        previous[nextNode?.node] = smallest;
                        nodes.enqueue(nextNode.node, sumOfDist);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
        //console.log('Distances:', distances,  nodes, "Prevoius:", previous);
    }
}
const dijkstraGraph = new WeightedGraph();
//Create Vertices
const verteces = ["A", "B", "C", "D", "E", "F"];
verteces.forEach(vertex => {
    dijkstraGraph.addVertex(vertex);
});
//Create Edges
dijkstraGraph.addEdge("A", "B", 5);
dijkstraGraph.addEdge("A", "C", 3);
dijkstraGraph.addEdge("B", "E", 3);
dijkstraGraph.addEdge("C", "D", 2);
dijkstraGraph.addEdge("C", "F", 5);
dijkstraGraph.addEdge("D", "F", 1);
dijkstraGraph.addEdge("D", "E", 3);
dijkstraGraph.addEdge("E", "F", 1);
//console.log(dijkstraGraph.adjacencyList);
console.log(dijkstraGraph.dijkstraSearch("A", "E"));
//# sourceMappingURL=dijkstra.js.map