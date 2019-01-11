class Puzzle {
    constructor() {
        this.board = [];
    }

    print = () => {
        console.log(this.board);
    }

    init() {
        for(var i = 0; i < 6; i++) {
            this.board[i] = [];
            for(var j = 0; j < 7; j++) {
                this.board[i][j] = 0;
            }
        }
    }

    getBoard = () => {
        return this.board;
    }
}

export default new Puzzle();