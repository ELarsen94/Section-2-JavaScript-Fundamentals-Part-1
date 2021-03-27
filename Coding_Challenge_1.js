const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);