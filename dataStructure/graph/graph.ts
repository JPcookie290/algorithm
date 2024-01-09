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

    //Depth First Search Interative
    depthFirst(startVertex: T): T[]{
        const stack = [startVertex]; //push, pop
        const result: T[] = [];
        const visted: {[key: string]: boolean} = {};
        let currentVertex: T | null = null;
        visted[startVertex as string] = true;

        while(stack.length) {
            currentVertex = stack.pop() as T;
            result.push(currentVertex);
            this.adjacencyList.get(currentVertex)?.forEach(neigbour => {
                if (!visted[neigbour as string]) {
                    visted[neigbour as string] = true;
                    stack.push(neigbour);
                }
            })
        }
        
        return result
    }

    //Depth First Search Recursive       
    depthFirstRec(startVertex: T) : T[] {
        const result: T[] = [];
        const visted: {[key: string]: boolean} = {};
        const dfs = (vertex: T) => {
            if (!vertex) return null;
            visted[vertex as string] = true;
            result.push(vertex);
            this.adjacencyList.get(vertex)?.forEach(neigbour => {
                if (!visted[neigbour as string]) {
                    dfs(neigbour);
                }
            });
        }
        dfs(startVertex);
        return result;
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
const graphLetters = new Graph<string>();
const letters = ["A", "B", "C", "D", "E", "F"]
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
console.log(graphLetters.depthFirst("A"));
console.log(graphLetters.depthFirstRec("A"));









