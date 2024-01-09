/*
const adjacencyList = new Map();
adjacencyList.set("A", ["B", "E"]);
adjacencyList.set("B", ["A", "C", "D"]);
adjacencyList.set("C", ["B", "D"]);
console.log(adjacencyList);
console.log(adjacencyList.get("A"));
*/
type AdjacencyList<T> = Map<T, T[]>;

class Graph<T> {
    adjacencyList: AdjacencyList<T> = new Map();

    addVertex(vertex: T) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: T, vertex2: T) {
        if(this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.get(vertex1)!.push(vertex2);
            this.adjacencyList.get(vertex2)!.push(vertex1);
        }
    }

    removeEdge(vertex1: T, vertex2: T) {
        if(this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            //this.adjacencyList.get(vertex1)!.splice(this.adjacencyList.get(vertex1)!.indexOf(vertex2), 1);
            //this.adjacencyList.get(vertex2)!.splice(this.adjacencyList.get(vertex2)!.indexOf(vertex1), 1);

            //Chritoph:
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1)!.filter((a: T) => a !== vertex2));
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2)!.filter((a: T) => a !== vertex1));
        }
    }

    removeVertex(vertex: T){
        this.adjacencyList.get(vertex)!.forEach(element => {
            this.removeEdge(element, vertex)
        });
        
        this.adjacencyList.delete(vertex)
        
        //Chritoph:
        //while(this.adjacencyList.get(vertex)?.length){
        //    this.removeEdge(vertex, this.adjacencyList.get(vertex)?.pop() as T)
        //}
    }

    depthFirst(startVertex: T): T[]{
        //wenn iterativ
        const stack = [startVertex]; //push, pop
        const result: T[] = [];
        const visted: {[key: string]: boolean} = {};
        visted[startVertex as string] = true;
        visted.Berlin
        //do something
        while(stack.length) {}        

        return result
    }
}

//Test
const graph = new Graph<string>();
const airports = ["Berlin", "Wien", "London", "Barcelona"]
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





