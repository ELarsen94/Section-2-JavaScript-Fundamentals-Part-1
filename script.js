let js = 'amazing';
/*console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas$matilda = 'JM';
let $function = 27;

let person = 'jonas'
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';

console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);

// Assignement operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1992 > now - 2018)

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1992 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 20;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


//5 falsy value: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 5;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log("Height is undefined");
}


const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favorite = Number(prompt("What's your favorite number?"));

console.log(favorite);

if (favorite === 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log('why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

const isTired = true

if (hasDriversLicense && hasGoodVision && isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}


const day = 'wednesday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples");
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === "sunday") {
    console.log('Enjoy the weekend');
} else console.log('Not a valid day!');


3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}.`)


const age = 18;
// age >= 18 ? console.log(`I like to drink wine`) :
//     console.log(`I like to drink water`);

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/