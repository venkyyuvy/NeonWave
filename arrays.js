const arr = [12, 13]

// arr = [] is nt possible

// end
arr.push(12,124);
// beginning
arr.unshift(1,3,4);
// middle
arr.splice(2, 0, 'a', 'b');

console.log(arr);
console.log(arr.indexOf('a'));
console.log(arr.indexOf('1'));
console.log(arr.lastIndexOf(12));
console.log(arr.indexOf(12, 3));
console.log(arr.includes(12));

const courses = [
    {id : 2, name : 'a'},
    {id: 1, name : 'b'}
]

const found = courses.find(function(course){
    return course.name === 'a';
})

console.log(found);

const foundIndex = courses.findIndex(function(course){
    return course.name === 'a';
})
console.log(foundIndex);

// arrow functions
console.log(courses.findIndex(course => course.name === 'a'));

// deleting elements 

// end
console.log(arr);
console.log(arr.pop());
// beginning
console.log(arr);
console.log(arr.shift());
// middle
console.log(arr);
arr.splice(2, 2);
console.log(arr);

// empyting an array

let numbers = [1,3,4,5];
another = numbers;

// numbers = [];

// numbers.length = 0;

// numbers.splice(0, numbers.length);

// while (numbers.length > 0)
//     numbers.pop()


// combining arrays

const first = [1,4,5, 23,23,32];
const second = [4,2,4];

console.log('combined', first.concat(second));
console.log('slice', first.slice(1, 3));
console.log('slice', first.slice(1));
console.log('slice', first.slice());


console.log('combine', [...first, 'a', ...second, 'b']);

for (let n of first){
    console.log(n)
}

first.forEach((n, index) => console.log(n, index));

console.log(first.join(' -=-=- '));

message = 'this is my beautiful to all';
parts = message.split(' ');
console.log(parts.join('-'))

console.log(first.sort().reverse())


const coursesNew = [
    {id : 2, name : 'apple'},
    {id: 1, name : 'aaaa'}
]

console.log(coursesNew.sort((my, other) => {
    myName = my.name.toUpperCase()
    otherName = other.name.toUpperCase()

    if (myName > otherName) return 1;
    if (myName < otherName) return -1;
    return 0;
}))

// every -> all ; some -> any

// checks whether every element satisfies the
// bool returned by the callback function
console.log(first.every(val => val >0))

// checks whether some element satisfies the
// bool returned by the callback function
console.log(first.some(val => val >1))


console.log(first.filter(val => val >1))
console.log(first.map(val => val *2))
const mapped = first.map(val => {
    return `<li> ${val} </li>`;
})
console.log(`<ul>  ${mapped.join()} </ul>`)

console.log(first.map(val =>  ({value: val}) ))

// chaining
console.log(first
    .filter(val => val >1)
    .map(val =>  ({value: val}) ))

// reduce
console.log(first
    .reduce((accumulator, currentVal) =>{
        return accumulator + currentVal
    }, 0))
// if we don't set the accumulator vale
// first ele will be use as acc_value 
// and the iteration starts on the second value
console.log(first
    .reduce((accumulator, currentVal) =>
         accumulator + currentVal
    ))

function arrayFromRange(min, max){
    const output = [];
    for (let i=min; i<=max; i++)
        output.push(i);
    return output
}
console.log(arrayFromRange(-10, -4));
console.log(arrayFromRange(1, 4));
console.log(arrayFromRange(1, 4));

function includes(array, searchElement){
    for (let i of array)
        if (i === searchElement)
            return true
    return false
}
console.log(includes(first, 50))
console.log(includes(first, 5))

function except(array, excluded){
    const output = [];
    for (let i of array)
        if (!excluded.includes(i))
            output.push(i)
    return output
}


console.log(except(first, [5]))
console.log(except(first, [23]))
console.log(except(first, [20]))

function move(array, index, offset){
    const newIndex = index + offset;
    if ((newIndex < 0 ) || (newIndex > array.length) ){
        console.error('Invalid offset');
        return null;
    }
    const output = [...array];
    val = output.splice(index, 1)[0];
    output.splice(newIndex, 0, val);
    return output;
}

console.log(move([1,2,3,4,6], 2, -3));
console.log(move([1,2,3,4,6], 2, 0));
console.log(undefined);

function countOccurences(array, searchElement){
    return array.reduce(
       ( acc, val) => {
           if (val === searchElement)
                return ++acc;
            return acc;
       }, 0
    )
}

console.log(first);
console.log(countOccurences(first, 23));
console.log(countOccurences(first, 3));
console.log(countOccurences(first, 5));

function max(array){
    if (array.length === 0) return undefined
    return array.reduce(
        (acc, val) => {
            return acc < val ? val: acc
        }
    ,);
}

console.log(max([]));
console.log(max([1,2,4,5,6,6]));
console.log(max([-1, 1,2,4]));
console.log(max([2324, 1,2,4,5,6,6]));


const movies = [
    {title: 'a', year: 2017, rating: 3.5},
    {title: 'b', year: 2019, rating: 5.0},
    {title: 'c', year: 2018, rating: 4.2},
    {title: 'e', year: 2018, rating: 4.7},
]

result = movies.filter(
    m => (m.year === 2018) && (m.rating > 4.0))
    .sort( (a, b) => b.rating - a.rating)
    .map(value => value.title)

console.log(result)