
type Edge<T,U> = {node: T; edge: U};

class WeightedGraph<T, U>{
    adjacencyList = new Map<T, Edge<T, U>[]>();

    addVertex(vertex: T){
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: T, vertex2: T, weight: U){
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.get(vertex1)?.push({node: vertex2, edge: weight});
            this.adjacencyList.get(vertex2)?.push({node: vertex1, edge: weight});
        }
    }
}

const dijkstraGraph = new WeightedGraph();
//Create Vertices
const verteces = ["A", "B", "C", "D", "E", "F"]
verteces.forEach(letter => {
    dijkstraGraph.addVertex(letter);
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



