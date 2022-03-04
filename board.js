// board game logic here

class Board {

    //reset for new game
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // get matrix filled with 0's

    getEmptyBoard() {
        return Array.from(
            {length: ROWS}, () => ARRAY
        )
    }
}