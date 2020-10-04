class ComputerPlayer {
    play(board){
        const availablePositions = board.getFreePositions();
        const position = Math.floor(Math.random() * availablePositions.length)
        availablePositions[position].innerText = "0"
    }
}