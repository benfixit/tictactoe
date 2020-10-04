class TicTacToeGame{
    constructor(){
        this.turns = 0
        this.boardWrapper = document.getElementById('wrapper');
        this.board = new Board();
        this.humanPlayer = new HumanPlayer();
        this.computerPlayer = new ComputerPlayer();

        this.boardHandler = this.boardHandler.bind(this)
        this.start = this.start.bind(this)
    }

    boardHandler(event){
        this.humanPlayer.play(event.target);
        this.turns++;
        this.boardWrapper.removeEventListener('click', this.boardHandler)
    }

    start(){
        setInterval(() => {
            if(this.turns % 2 === 0){
                this.boardWrapper.addEventListener('click', this.boardHandler)
            } else {
                this.computerPlayer.play(this.board);
                this.turns++;
                this.boardWrapper.addEventListener('click', this.boardHandler)
            }
        })
    }
}

const tictactoe = new TicTacToeGame();
tictactoe.start();

