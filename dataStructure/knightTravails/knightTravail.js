"use strict";
class Knight {
    templateMoves;
    constructor() {
        this.templateMoves = [[-2, -1],
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2]];
    }
    checkCoordinates(array) {
        let check = true;
        let index = 0;
        while (check && index < array.length) {
            check = (array[index] >= 0 && array[index] < 8) ? true : false;
            index++;
        }
        return check;
    }
    knightMoves(start, index) {
        const coordinates = [];
        const moveCoord = index;
        if (!this.checkCoordinates(start))
            return null;
        coordinates.push(start[0] + moveCoord[0]);
        coordinates.push(start[1] + moveCoord[1]);
        if (!this.checkCoordinates(coordinates))
            return null;
        return coordinates;
    }
    bdf(start, end) {
        const queue = [{ current: start, path: start }];
        //const visited:
        while (queue.length) {
            //do something
            let currentPos = queue.shift();
            if ((currentPos.current[0] === end[0]) && (currentPos.current[1] === end[1])) {
                return currentPos.path;
            }
            this.templateMoves.forEach(move => {
                let nextMove = this.knightMoves(currentPos?.current, move);
                if (nextMove) {
                    queue.push({ current: nextMove, path: [...currentPos.path, ...nextMove] });
                }
            });
        }
    }
}
/* ---------- Testing ---------- */
const knight = new Knight();
console.log(`You made it in ${(knight.bdf([3, 3], [0, 0]).length / 2)} moves. Here is your Path: ${knight.bdf([3, 3], [0, 0])}`);
//# sourceMappingURL=knightTravail.js.map