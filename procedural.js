const studentName = prompt('Enter the student name')
const totalSubjects = 6
const subjectWiseMarks = []
let highestMarks = 0
let lowestMarks = 100
let total = 0

function setSubjectWiseMarks() {
    for(let i=0; i< totalSubjects;  i++) {
        subjectWiseMarks.push(prompt('subject marks'))
    }
}

function setData() {
    for(let i=0;i< totalSubjects;i++) {
        if(highestMarks < parseInt(subjectWiseMarks[i])) {
            highestMarks = parseInt(subjectWiseMarks[i])
        }
        if(lowestMarks > parseInt(subjectWiseMarks[i])) {
            lowestMarks = parseInt(subjectWiseMarks[i])
        }
        total = parseInt(subjectWiseMarks[i]) + total
        }
}

setSubjectWiseMarks()
dataToVariables()
console.log(`${studentName} highest marks is ${highestMarks}`)
console.log(`${studentName} lowest marks is ${lowestMarks}`)
console.log(`${studentName} total marks is ${total}`)
