class Board {
    constructor(){
        this.positions = Array.from(document.querySelectorAll('.col'))
        this.getFreePositions()
    }

    getFreePositions(){
        return this.positions.filter(position => position.innerText === "")
    }
}