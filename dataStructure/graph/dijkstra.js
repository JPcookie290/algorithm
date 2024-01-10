"use strict";
/*
First Instance      |    Following Instances Example
Distances:          |    Distance:
A: 0                |    A: 0
B: Infinity         |    B: 5
C: Infinity         |    C: Infinity
D: Infinity         |    D: 5
E: Infinity         |    E: Infinity
F: Infinity         |    F: Infinity
-------------------   -------------------
previous
A: null             |    A: null
B: null             |    B: 'A'
C: null             |    C: null
D: null             |    D: null
E: null             |    E: 'B'
...                 |    ...
-------------------   -------------------
*/
//Priority Queue                                  //in Praxis würde man eher einen Binary-Heap nehmen
class PriorityQueue {
    values = []; //erstellt ein Array mit Objekten mit einem Value und einem Wert,
    //der eine Nummber ist und die priority angibt
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority); //sortiert die mit gegebene "weight/edge" des Edges
    } //der kleinere Wert hat eine höhere priority
}
class WeightedGraph {
    adjacencyList = new Map();
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []); //dieser bekommt ein leeres Array wo seine Edges gespeichert werden
    }
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) { //wenn 2 Vertexes vorhanden sind erstellt es
            this.adjacencyList.get(vertex1)?.push({ node: vertex2, edge: weight }); //mit der Array .push() methode ein Edge, dieses
            this.adjacencyList.get(vertex2)?.push({ node: vertex1, edge: weight }); //führt das Edge zu beiden Vertexes.
        } //"pushed" den Edge ind das von Vertex vorhandene array
    }
    dijkstraSearch(start, end) {
        const nodes = new PriorityQueue(); //erstellt die PriorityQueue für die Sortierung
        const distances = {};
        const previous = {};
        let smallest;
        let nextNode;
        let sumOfDist;
        let path = [];
        //init listen
        this.adjacencyList.forEach((_, key) => {
            if (key == start) { //wenn es der Startpunkt ist wird der Wert 0 übergeben, da es dort beginnt
                distances[key] = 0; //für die anderen Objekte wird der Wert zuerst auf Infinity gestellt
                nodes.enqueue(key, 0); //previous wird auf null gesetzt da die Objekte ihre Werte noch nicht ausgelesen haben 
            }
            else { //und man die Verbinungen auch noch nicht ausgelesen hat
                distances[key] = Infinity;
                nodes.enqueue(key, Infinity);
            }
            previous[key] = null;
        });
        //loop through graph
        while (nodes.values.length) { //solange ein Object in der PriorityQueue vorhanden ist
            smallest = nodes.dequeue()?.val; //entfernt das erste Object der Liste und übergibt den value an smallest
            //if end
            if (smallest === end) { //endet die Schleife wenn smallest & die end Variabe gleich sind
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) { //check ob smallest vorhanden ist und nicht Infinity ist
                for (let neigbor in this.adjacencyList.get(smallest)) { //nimmt mit dem key[smallest] übergeben wird aus der adjacencyList
                    //und gehen das von Bbject vorhandem Array durch und nimmt den Index her
                    //search for neighbor nodes                                                     
                    nextNode = this.adjacencyList.get(smallest)?.at(neigbor); //nextNode holt sich wieder das Object und holt aus diesem das mit
                    //dem Index vorhanden Object aus 
                    //calculate distances
                    sumOfDist = distances[smallest] + nextNode.edge; //setzt sumOfDist auf den wert von smallest und rechnet
                    //den Value vom oben geholten Object dazu
                    //update lists
                    if (sumOfDist < distances[nextNode?.node]) { //Liste wird nur aktualisert wenn sumOfDis kleiner ist als distances[nextNode?.node as string]
                        distances[nextNode.node] = sumOfDist;
                        previous[nextNode.node] = smallest;
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
console.log(dijkstraGraph.dijkstraSearch("A", "E")); //["A", "C", "D", "F", "E"]
//# sourceMappingURL=dijkstra.js.map