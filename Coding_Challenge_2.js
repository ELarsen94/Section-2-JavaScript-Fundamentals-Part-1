const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark has a higher BMI than John`);
} else {
    console.log(`John has a higher BMI than Mark`);
}

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})'`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})'`);
}