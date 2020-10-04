class Board {
    constructor(){
        this.positions = Array.from(document.querySelectorAll('.col'))
        this.winningCombinations = WINNING_COMBINATIONS
    }

    getAvailablePositions(){
        return this.positions.filter(position => position.innerText === "")
    }

    checkForWinner(){
        let winner = false
        let isWinningCombo = false

        this.winningCombinations.forEach((combo) => {
            const [ firstPos, secondPos, thirdPos ] = combo
            isWinningCombo = this.positions[firstPos].innerText !== "" &&
                this.positions[firstPos].innerText === this.positions[secondPos].innerText &&
                this.positions[firstPos].innerText === this.positions[thirdPos].innerText
            
            if(isWinningCombo){
                winner = true;
                combo.forEach(pos => {
                    this.positions[pos].className += ' winner'
                })
            }
        })

        return winner;
    }
}