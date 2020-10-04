class Board {
    constructor(){
        this.positions = Array.from(document.querySelectorAll('.col'))
    }

    getAvailablePositions(){
        return this.positions.filter(position => position.innerText === "")
    }

    getFilledPositions(){
        return this.positions.filter(position => position.innerText !== "")
    }
}