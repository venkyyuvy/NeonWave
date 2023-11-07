
let power = 'string_val';
console.log(power);
let var1 = 'string1';
let var2 = 'string2';
const interestRate = 0.8;
let name = 'Venkatachalam Natchiappan';
let age = 30;
let isApproved = true;
let firstName = undefined;
let lastName = null;
console.log(interestRate);
console.log(
    "let us check that whether this gets printed"
);

let person = {
    age: 23,
    name: 'kumar'
}
let selection = 'name'

console.log(person[selection])

let selectedColors = ['red', 'blue'];
selectedColors[2] = 23;
selectedColors[4] = 23;

console.log(selectedColors[3])
console.log(selectedColors.length)

function myfunc(person, lastName){
    console.log('hello ' + person.name + ' ' + lastName);
}
myfunc(person, 'pwoef')

myfunc(person, 'asldkf')

function square(num){
    return num * num
}
console.log(square(23));

let x = 2;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log('module operator :', 30 % y);
console.log(x ** y);

// increament 
console.log(++x);
console.log(x++);

// decreament 
console.log(--x);
console.log(x--);

x = 10;

x++;
x += y;
console.log(x);


console.log(x> 3);
// strict equality 
console.log(x, y, x === y);
// loose equality convert the type of right side value
console.log('loose equality', '1' == 1);
console.log('loose equality', '1' == 1);
console.log('loose equality', true == 1);
console.log('strict equality', '1' === 1);
console.log(x, y, x !== y);

let points = 121000;

let type = points < 100 ? 'gold' : 'silver'
console.log(type)

console.log(true && true)
console.log(false && true)
console.log(false || true)
console.log(!false)
console.log(false || 'mosh')
console.log(false || 2342)
// short circuiting
console.log(false  || 'first true val' || 2342)

// falsy values
// undefined, null, '', 0, false, NaN
// anything which is not falsy is Truthy

console.log(1 & 2)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission;
console.log(myPermission)
// | operator is to add permission
console.log(myPermission | readPermission | writePermission | executePermission) 

// & operator is to check permission
let message =
 (myPermission & readPermission) ? 'Yes' : 'No';

console.log(message);

// operator precedence
x = 2 + 3 * 4;
console.log(x)

// variable swapping

let a1 = 'red';
let b1 = 'blue';

// let temp = b1;
// b1 = a1;
// a1 = temp;

// this swap func doesn't work
function swap(a, b){
    return b, a
}

a1, b1 = swap(a1, b1)
console.log(a1);
console.log(b1);

// control flows
hour = 24
if (hour >= 6 && hour <=12){
    console.log('Good Morning')
}
else if (hour > 12 && hour <=18){
    console.log('Good afternoon')
}
else {
    console.log('Good evening')
}

var role = '3242'

switch (role) {
    case 'guest':
        console.log('guest user')
        break;

    case 'moderator':
        console.log('moderator user')
        break;
    
    default:
        console.log('Unknown user')
}

//loops

// for (let ii = 0; ii <= 5; ii++){
//     if (ii % 2 !== 0){
//         console.log(ii);
//     }
// }

let while_i = 0;
console.log('while_loop', while_i);
while (while_i <=5){
    if (while_i % 2 !== 0){
        console.log('while_loop', while_i);
    }
    while_i++;
}

let do_while_i = 9;
do {
    if (do_while_i % 2 !== 0){
        console.log('do_while_loop', do_while_i);
    }
    do_while_i++;
}while(do_while_i <=5);

// for in loop
for (let key in person){
    console.log(key, person[key])
}

let colors = ['red', 'blue', 'green']

for (let index in colors){
    console.log(index, colors[index])
}

for (let color of colors){
    console.log(color)
}

// max of two numbers

function max_func(a, b){
    // if (a >=b) return a;
    // return b;
    return (a>b)? a : b;
}

console.log(max_func(232, 232))

function isLandscape(width, height){
    return width > height;
}
console.log(isLandscape(1080, 980))

// fizzbuzz

function fizzbuzz(input){
    if (typeof(input) !== "number"){
        return NaN
    }
    div_3 = input % 3 === 0
    div_5 = input % 5 === 0
    output = ''
    if (div_3) output += 'Fizz'
    if (div_5) output += 'Buzz'
    if (!output) return input
    return output
}

console.log(fizzbuzz(false))

// speed limit

function speedLimit(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint){
        console.log('ok');
        return;
    }
    points = Math.floor((speed - speedLimit) / kmPerPoint); 
    if (points > 12)
        console.log('License Suspended');
    else
        console.log('points: ', points);
}

speedLimit(190);

function showNumber(num){
    for (let i=0; i <= num; i++){
        mess =  (i % 2 == 0)? "EVEN" : "ODD"
        console.log(mess, i)    
    }
}

showNumber(10)

function countTruthy(array){
    counter = 0;
    for (let ele of array) if (ele) counter++;
    return counter
}

console.log(countTruthy([12,3,31,NaN, '', 'Mathan']))

const movie = {
    'title': 'pollathavan',
    'releaseYear': 2010,
    'rating': 4.1,
    'director': 'vettrimaran'
}
function showProperties(movie){
    for(let key in movie){
        val = movie[key];
        if (typeof val === "string")
            console.log(key, val);
    }
}

showProperties(movie);

function sumMultiples3and5(num){
    result = 0;
    for (let i=1; i<=num; i++){
        if ((i % 3 === 0) || (i % 5 === 0)) result +=i
    }
    return result;
}

console.log(sumMultiples3and5(10));


const marks = [80, 80, 50];

function calculateAvg(array){
    let total = 0;
    for (let m of array){
        total += m;
    }
    return total / array.length
}
function calculateGrade(marks){

    mark = calculateAvg(marks)
    if (mark < 60) 
        return 'F'
    if (mark < 70) 
        return 'D'
    if (mark < 80) 
        return 'C'
    if (mark < 90) 
        return 'B'
    return 'A'
}

console.log(calculateGrade(marks))

function showStars(num){
    for (let i=1; i<=num; i++){
        row = '';
        for (let j=0; j<i; j++)
            row += '*';
        console.log(row);
    }
}

showStars(1)

function isPrime(number){
    for (let j=2; j<number; j++) {
        if (number % j === 0)
            return false
    }
    return true
}
function showPrimes(num){
    for (let i=2; i<=num; i++)
        if (isPrime(i)) console.log(i);
}

showPrimes(20)