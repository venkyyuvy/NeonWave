function print(fn, ...args){
    return console.log(fn.name, fn(...args));
}

walk();
// function declaration
function walk() {
    console.log('walk')
}

// anonymous function
// can't use run before its defn
// hoisting - process of moving fn declaration
// to top of the script
let run = function () {
    console.log('print soemthing')
}

run();

let copyFn = run;
copyFn();

// dynamic typing

let z = 1;
z = 'aspect';

function sum() {
    let total = 0;
    for (let i of arguments)
        total += i;
    return total;
}

print(sum,2,2,2,2,2);

// <...> rest operator
// rest must be the last formal parameter
function sumRest(...args){
    return args.reduce((acc, val) => acc+val);
}

print(sumRest,2,2,2,2,2);

function discountAfterSum(discount, ...prices){
    total = prices.reduce((acc, val) => acc + val);
    return total * (1-discount);
}

print(discountAfterSum, 0.1, 30, 20)
print(discountAfterSum, 0.1, 30, 20, 1, 1)

function interestCal(principal, years=3.5, rate=6){
    return principal * rate / 100 * years
}
print(interestCal, 100000, 3.5, 6)
print(interestCal, 100000)
print(interestCal, 100000, undefined, 6)


const personObj = {
    firstName: 'Venkatachalam',
    lastName: 'Natchiappan',
    get fullName() {
        return  `${personObj.firstName} ${personObj.lastName}`
    },
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error(`given value
             \`${value}\` is not a string`);
        let names = value.split(' ')
        if (names.length !==2){
            throw new Error (`
            enter a first and last name`);
        }
        this.firstName = names[0]
        this.lastName = names[1]
    }
};

console.log(personObj.fullName)

personObj.fullName = 'Venky Yuvy'
console.log(personObj.fullName)

try{
    // personObj.fullName = null;
    // personObj.fullName = '';
}
catch (e){
    alert(e);
}
    
console.log(personObj.fullName)

// scoping

const color = 'red';
console.log(color);
function startFn(){
    const mess = 'hi';
    const color = 'blue';
    console.log(color);
    if (true){
        const i = 23;
    }
    for (let i=0; i< 3; i++){
        console.log(i);
        console.log(color);
    }
}

print(startFn)
// console.log(mess);

function endFn(){
    const mess = 'hi';
    console.log('mess in endFn', mess)
}

print(endFn)

const mess = 'hi';
console.log(mess);

// var - function scope variables
// let, const - block scope variables

function startFunction(){
    for (var i=0; i< 3; i++){
    // for (let i=0; i< 3; i++){
        console.log(i);
    }
    console.log(i);
}
print(startFunction)

// var defined will be added to the window
var myTestVar = 'some message';
// this var and all the function defined here
// will be added to window

// this keyword
// obj - method
// function - window in browser; global in node
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}
video.stop = function(){
    console.log(this);
}

video.play();

function playVideo(a, b){
    console.log(this);
}

playVideo()

function Video(title){
    this.title = title,
    console.log(this);
    this.play = function(){
        console.log('constructor', this);
    }
}

new Video('a').play();

const video1 = {
    title : 'a',
    tags: ['a1', 'b1', 'c1'],
    showTags() {
        this.tags.forEach(tag =>{
              console.log(this.title , tag);
        })
    }
}

video1.showTags();

const video2 = {
    title : 'a',
    tags: ['a1', 'b1', 'c1'],
    showTags() {
        // anoymous function 
        // this -global object
        this.tags.forEach(function(tag) {
              console.log(this.title , tag);
        }, this)
    }
}
video2.showTags()

// don't use this approach
// but used in many places
const video3 = {
    title : 'a',
    tags: ['a1', 'b1', 'c1'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
              console.log(self.title , tag);
        })
    }
}
video3.showTags()

playVideo()
// call and apply differ in taking the params
playVideo.call({name: 'power'}, 1, 2);
playVideo.apply({name: 'power'}, [2,1]);
playVideo.bind({name: 'power'}, [2,1])();

const video5 = {
    title : 'a',
    tags: ['a1', 'b1', 'c1'],
    showTags() {
        this.tags.forEach(function(tag) {
              console.log(this.title , tag);
        }.bind(this))
    }
}
video5.showTags()

// sum of arguments

function calcSum(...args){
    const cond = (args.length === 1) && (Array.isArray(args[0]))
    args = cond? args[0]: args
    return args.reduce((acc, val) => acc+val)
}

console.log(calcSum(1,2,4) );
console.log(calcSum([1,2,4]) );

const circle = {
    radius: 2,
    get area() {return this.radius * this.radius * Math.PI}
}

console.log(circle.area);
// this doesn't throw any error
// same time area read only attribute doesn't get affected.
circle.area = 1;
console.log(circle.area);
circle.radius = 1;
console.log(circle.area);

function countOccurences(array, searchElement){
    if (!Array.isArray(array))
        throw new Error('given value is not an array');
    return array.reduce(
       ( acc, val) => {
           if (val === searchElement)
                return ++acc;
            return acc;
       }, 0
    )
}

try{
    let array = [1, 2, 3, 6, 5];
    console.log(array);
    console.log(countOccurences(array, 3));
    console.log(countOccurences(null, 23));
}
catch (e){
    // alert(e);
    console.log('error message is', e.message);
}

