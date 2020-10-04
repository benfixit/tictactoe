class ComputerPlayer {
    play(board){
        const availablePositions = board.getAvailablePositions();
        const position = Math.floor(Math.random() * availablePositions.length)
        availablePositions[position].innerText = "0"
    }
}