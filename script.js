class TicTacToeGame {
    constructor(){
        this.turns = 0
        this.boardWrapper = document.getElementById('wrapper');
        this.board = new Board();
        this.humanPlayer = new HumanPlayer();
        this.computerPlayer = new ComputerPlayer();
        this.winningCombinations = WINNING_COMBINATIONS

        this.boardHandler = this.boardHandler.bind(this)
        this.start = this.start.bind(this)
    }

    boardHandler(event){
        const { target: { innerText} } = event
        const hasWinner = this.checkForWinner()
        console.log('hasWinner1 === ', hasWinner)
        if(!innerText && !hasWinner){
            this.humanPlayer.play(event.target);
            this.turns++;
            this.boardWrapper.removeEventListener('click', this.boardHandler)
        }
    }

    start(){
        const intervalId = setInterval(() => {
            const hasWinner = this.checkForWinner()
            if(hasWinner){
                clearInterval(intervalId)
                return
            }
            if(this.turns % 2 === 0){
                this.boardWrapper.addEventListener('click', this.boardHandler)
            } else {
                this.computerPlayer.play(this.board);
                this.turns++;
                this.boardWrapper.addEventListener('click', this.boardHandler)
            }
        })
    }

    checkForWinner(){
        let hasWinner = false

        this.winningCombinations.forEach((combo) => {
            const [ firstPos, secondPos, thirdPos ] = combo
            if(
                this.board.positions[firstPos].innerText !== "" &&
                this.board.positions[firstPos].innerText === this.board.positions[secondPos].innerText &&
                this.board.positions[firstPos].innerText === this.board.positions[thirdPos].innerText
                ){
                 hasWinner = true;
             }
        })

        return hasWinner;
    }
}

const tictactoe = new TicTacToeGame();
tictactoe.start();

