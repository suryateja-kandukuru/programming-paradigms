class studentResults  {
    constructor() {
        this.studentName = prompt('enter the student name')
        this.subjectWiseMarks = []
        this.highestMarks = 0
        this.lowestMarks = 0
        this.total = 0
    }

    addSubjectWiseMarks() {
        Array.from([1,2,3,4,5,6]).forEach(() => this.subjectWiseMarks.push(parseInt(prompt('subject marks'))))
        this.getHighestMarks()
        this.getLowestMarks()
        this.getTotal()
    }

    getHighestMarks() {
        this.highestMarks = Math.max(...this.subjectWiseMarks)
    }

    getLowestMarks() {
        this.lowestMarks = Math.min(...this.subjectWiseMarks)
    }

    getTotal() {
        this.total = this.subjectWiseMarks.reduce((prev=0, curr)  => prev+curr)
    }

    printHighestMarks() {
        console.log(`${this.studentName} highest marks is ${this.highestMarks}`)  
    }

    printLowestMarks(){
        console.log(`${this.studentName} lowest marks is ${this.lowestMarks}`)  
    }

    printTotal()  {
        console.log(`${this.studentName} total marks is ${this.total}`)
    }
}

const studentOne =  new studentResults()
studentOne.addSubjectWiseMarks()
studentOne.printHighestMarks()
studentOne.printLowestMarks()
studentOne.printTotal()

const studentTwo =  new studentResults()
studentTwo.addSubjectWiseMarks()
studentTwo.printHighestMarks()
studentTwo.printLowestMarks()
studentTwo.printTotal()