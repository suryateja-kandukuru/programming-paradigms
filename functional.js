function getStudentSchema() {
  return {
    studentName: "",
    subjectWiseMarks: [null, null, null, null, null, null],
    highestMarks: 0,
    lowestMarks: 0,
    total: 0,
  };
}

function addSubjectWiseMarks(student) {
  return student.subjectWiseMarks.map(prompter)
}

function prompter() { return parseInt(prompt("subject marks")) }

function setStudentName() {
  return prompt("enter the student name");
}

function getHighestMarks(student) {
  return Math.max(...student.subjectWiseMarks);
}

function getLowestMarks(student) {
  return Math.min(...student.subjectWiseMarks);
}

function getTotal(student) {
  return student.subjectWiseMarks.reduce(summer);
}

function summer(prev, curr) { return prev+curr }

function printHighestMarks(student) {
  return `${student.studentName} highest marks is ${student.highestMarks}`
}

function printLowestMarks(student) {
  return `${student.studentName} lowest marks is ${student.lowestMarks}`
}

function printTotal(student) {
  return `${student.studentName} total marks is ${student.total}`
} 

function logMe(data)  { console.log(data) }

const student = getStudentSchema();
student.studentName = setStudentName();
student.subjectWiseMarks = addSubjectWiseMarks(student);
student.highestMarks = getHighestMarks(student)
student.lowestMarks = getLowestMarks(student)
student.total = getTotal(student)
logMe(printHighestMarks(student));
logMe(printLowestMarks(student));
logMe(printTotal(student));

console.log(student)

const studentOne = getStudentSchema();
studentOne.studentName = setStudentName();
studentOne.subjectWiseMarks = addSubjectWiseMarks(studentOne);
studentOne.highestMarks = getHighestMarks(studentOne)
studentOne.lowestMarks = getLowestMarks(studentOne)
studentOne.total = getTotal(studentOne)
logMe(printHighestMarks(studentOne));
logMe(printLowestMarks(studentOne));
logMe(printTotal(studentOne));

console.log(studentOne)
