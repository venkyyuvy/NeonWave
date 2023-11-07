
const circle = {
    radius: 4,
    location: {
        x: 2,
        y: 3
    },
    draw: function () {
        console.log('drawing circle now');
    },
}

circle.draw(); // draw method

// factory functions
function factoryCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw inside factory func');
        }
    }
}

const circle1 = factoryCircle(1)
circle1.draw()

const circle2 = factoryCircle(1)
circle2.draw()

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw inside constr. func');
    }
}

const circleFac1 = new Circle(1);
circleFac1.draw()
circleFac1.color = 'yellow';
console.log(circleFac1)
delete circleFac1.radius
console.log(circleFac1)

// new String() <-> '' "" ``
// new Boolen() <-> '' "" ``

// functions are objects

const circleObj = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('draw inside magic func');
    }`);

let circle4 = new circleObj(2);
circle4.draw();


let emptyObj = {}
Circle.call(emptyObj, 1);
emptyObj.draw()

emptyObj = {}
Circle.apply(emptyObj, [1])
emptyObj.draw()


// primitives are copied by value
// objects (includes functions, arrays) 
// are copied by reference

x = 20;
y = x;
x = 2;
console.log(y);

x = { value: 20 }
y = x;
x.value = 2;
console.log(y.value);

let number = 10;

function increament(num) {
    num++;
}
increament(number);
console.log(number);

let myObject = { value: 10 };

function increament(obj) {
    obj.value++;
}
increament(myObject);
console.log(myObject.value);

// enumeration

let circleNew = new Circle(32);
for (let key in circleNew) {
    console.log(key, circleNew[key]);
}

for (let key of Object.keys(circleNew)) {
    console.log(key, circleNew[key])
}

for (let entries of Object.entries(circleNew)) {
    console.log(entries)
}

if ('radius' in circleNew) console.log('YES');
if ('wrongOne' in circleNew) console.log('YES');

another = {};

for (let key in circleNew)
    another[key] = circleNew[key];

console.log(another);

another = Object.assign({}, circleNew)
console.log(another);

another = { ...circleNew };
console.log(another);

// garbage collectors run in background automatically

// math library

console.log(Math.random())
console.log(Math.random() * (10) + 40)

// string object

message = "hi! I'm  a  String object";
console.log(typeof (message));

another = new String('hi');
console.log(typeof (another));

console.log(message.length);
console.log(message[12]);
console.log(message.includes('obj'))
console.log(message.startsWith('obj'))
console.log(message.startsWith('hi'))
console.log(message.endsWith('ect'))
console.log(message.indexOf('ect'))
console.log(message.replace('object', ''))
console.log(message.toUpperCase())
console.log(message.toLowerCase())
console.log(message.replace('object', '\''))
console.log(message.replace('a', '\n'))
console.log(message.split(' '));

// tempalte literals
let myName = 'first Name';

console.log(`this
my new 
way of 'WRITING' things - ${myName}`);

console.log(Date());
console.log(new Date('Sep 30 2021 12:00').toTimeString());
console.log(new Date(2021, 3, 1).toDateString());
console.log(new Date(2021, 3, 1).toISOString());

// street, city, zipCode

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

myAddress = new createAddress('kakkum pillaiyar koil st',
    'Mayiladuthurai', 609001);

function showAddress(address) {
    for (let entires of Object.entries(address))
        console.log(entires[0], entires[1]);
}
showAddress(myAddress);

function ConstructorAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

myConstructorAddress = new ConstructorAddress('a', 'b', 2342);
showAddress(myConstructorAddress);

function areEqual(add1, add2){
    for (let key in add1){
        if (add1[key] !== add2[key])
            return false
    }
    return true
}

myAddressCopy = {... myAddress};
console.log(areEqual(myAddress, myAddressCopy));
myAddressCopy.city = 'California';
console.log(areEqual(myAddress, myAddressCopy));

function areSame(add1, add2){
    return add1 === add2
}

myAddressCopy = {... myAddress};
console.log(areSame(myAddress, myAddressCopy));
myAddressCopy = myAddress;
console.log(areSame(myAddress, myAddressCopy));

let myBlogPost = {
    title : 'title text',
    body: 'body of the post',
    author: 'author name',
    views: 23423,
    comments: [
        {author: 'author1', body: 'comment 1'},
        {author: 'author2', body: 'comment 2'}
    ],
    isLive: true
}

console.log(myBlogPost);

function Blog(title, body, author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

console.log(new Blog('title1', 'body ', 'xxy'))

// priceRanges

let priceRange = [
    { label:'$', tooltip : 'inexpensive', minPrice: 0, maxPirce: 100 },
    { label:'$$', tooltip : 'moderate', minPrice: 100, maxPirce: 200 },
    { label:'$$$', tooltip : 'expensive', minPrice: 200, maxPirce: 1000 },
]

