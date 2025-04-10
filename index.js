// 1

function stringLength(strings) {
    return strings.map(str => str.length);
}

const strings = ["Melat", "Danny", "Meron"];
console.log(stringLength(strings)); 

// 2

function evenNumbers(numbers) {
    return numbers
    .filter(num => num % 2 === 0);
}

const numbers = [12,13,14,15,16];
console.log(evenNumbers(numbers)); 

//3

function sortScores(students) {
    const studentsScore = students.filter(student => student.score > 75);
    return studentsScore ;
}

const students = [
    { name: "Melat", score: 60 },
    { name: "Danny", score: 40 },
    { name: "Meron", score: 90 },
];

console.log(sortScores(students)); 


// 4

function squareNumbers(nums) {
    return nums.map(num => num ** 2); 
}

const nums = [2, 4, 5, 6];
console.log(squareNumbers(nums));

// 5

function uppercaseStrings(elements) {
    return elements
        .filter(item => typeof item === "string")
        .map(str => str.toUpperCase());
}

const mixedArray = ["Abebe", 32, "Berhe", 72, "$", "love"];
console.log(uppercaseStrings(mixedArray));