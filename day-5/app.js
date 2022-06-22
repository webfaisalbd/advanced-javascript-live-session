// normal function 
function add(a, b) {
    return a + b;
}
console.log(add(20, 10));


// multi line arrow function
const add2 = (a, b) => {
    return a + b;
}
console.log(add2(20, 10));

// single line arrow function 
const add3 = x => x + x;
console.log(add3(20));


// optional chaining 
const person = {
    name: 'Faisal',
    age: 26,

    address: {
        city: 'Dhaka',
        division: 'Dhaka'
    }
}
console.log(person.address?.city);


// template string 
// Ekta string er moddhe jodi javascript er dynamic value add korte chai , tahole template string use korbo.
let id = 5;
let url = `https://jsonplaceholder.typicode.com/todos/${id}`;
console.log('first url: ', url);


let idFunction = () => 3;
let url2 = `https://jsonplaceholder.typicode.com/todos/${idFunction()}`
console.log('second url: ', url2);

// without template string 
let myId = 5;
let myUrl = 'https://jsonplaceholder.typicode.com/todos/' + myId;
console.log('third url: ', myUrl);


// destructuring in array 
const arr = [1, 2, 3, 4, 5];

const [first, second, , , fifth] = arr;
console.log(first);
console.log(second);
console.log(fifth);

// taking last element of an array
const arr2 = [10, 20, 33, 22, 11, 44, 33, 55, 24, 22, 25, 24, 21, 65, 43, 22, 12, 56, 32, 11];
console.log('last element of an array: ', arr2[arr2.length - 1]);


// destructuring in object
const demoObj = {
    myName: 'faisal',
    age: 26,
    id: 161,
    address: {
        city: 'savar',
        division: 'dhaka'
    }
}
const { myName, age: myAge, address: { city, division } } = demoObj;
// age variable er name ta change kore myAge disi, eita k bole alias. 
console.log(myName, myAge, city, division);




// Loop 
let array = [10, 20, 30, 100, 50, 75];

// normal loop 
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for of loop 
for (const element of array) {
    console.log(element);
}


// for in loop 
for (const element in array) {
    console.log(element);
}






let object = {
    a: 10,
    b: 20,
    c: 30
}
// object er moddhe for in loop
for (const key in object) {
    console.log(key); // we got object property, not object value
}



for (const key in object) {
    console.log(object[key]); // now we got object value
}




// object er moddhe for of loop
// for(const key of object){
//      console.log(key); // we get: Uncaught TypeError: object is not iterable
// } 





// async await 
// without async await 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });

// with async await 
const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}
getUser();




// Object.is method
const a = 10;
const b = 20;
const c = 10;

console.log('a compare with b', Object.is(a, b));
console.log('a compare with c', Object.is(a, c));


// reference type 
const d = [1, 2];
const e = [1, 2];

console.log('d object compare with e object: ', Object.is(d, e));



// reference type 
const f = [];
const g = [];

console.log('f object compare with g object: ', Object.is(f, g));








// Spread Operator
// Spread Operator in array
let array1 = [10, 20, 30];
let array2 = [...array1, 50, 70, 90];

console.log('Spread Operator: ', array2);


// without spread , using concat 
let array3 = [5, 6, 7];
array1 = array1.concat(array3);
console.log('array1 concat with array3: ', array1);


// Spread Operator in Object
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// output : {foo: 'baz', x: 42, y: 13}





// Set 
// set always gives unique values
const demoSet = new Set();
demoSet.add(1);
demoSet.add(2);
demoSet.add(1);
console.log('Unique value: ', demoSet);

const duplicates = [1, 1, 2, 3, 4, 2, 5, 3, 4];
const set = new Set([...duplicates]);
// removing element from an array
set.delete(2);
console.log('Unique array: ', set);
// total size of an array 
console.log('total size of an array: ', set.size);
// key te kono value ase kina
console.log('set e 1  value ase kina: ', set.has(1));






// Map
// normally, amra object er key hisebe kono number type/function/Object/array rakhte pari na. 
// amra object er value ei dhoroner data type rakhte pari. kintu key hisebe pari na.
// Tai jodi amader emon typer data k key hisebe rakhte chai, tokhon amader Map() use korte hobe. 

const map = new Map();
map.set(1, '11'); // eikhane 1 hosse key, r value hosse 11
map.set([1, 2, 3], false);
map.set(() => { }, [2, 4, 6]);

console.log('See the Map() :', map);




// Object er kichu method


// Object.values
const obj3 = {
    name: 'Faisal',
    age: 25
}
console.log(Object.values(obj3));



// Object.keys
console.log(Object.keys(obj3));



// Object.entries
console.log(Object.entries(obj3));





// Array er kichu method
const demoArray = [10, 20, 23, 30, 40];


// forEach
// kono kisu return kore na, tai kono array o dey na
// demoArray.forEach((element, index, wholeArray ) => {
//     console.log(element, index, wholeArray);
// })

demoArray.forEach((ele) => {
    console.log("Square of : " + ele + ' is ' + ele * ele);
})




// map 
const demoArray1 = [10, 20, 23, 30, 40];
// array return kore , tai alada kore push kora lage na.
// Normally korle, for loop kora lagto, and ekta empty array neya lagto, seikhane data push kora lagto.
// But map use koray, extra array neya lage nai, kono kisu push o kora lage nai.
// new array dorkar porle map use korbo.
const mapOutput = demoArray1.map((ele) => {
    return ele * 2;
})
console.log('Double of input: ', mapOutput);





// filter method
const demoArray2 = [10, 20, 23, 30, 40];
// filter er khetre, true return korle, j value er jonno true return korbe, sei value ta array te dibe.

const filteredArray = demoArray2.filter((ele) => {
    return ele % 2 == 0;
})
console.log('filtered Array: ', filteredArray);


const todoArrayOfObj = [{
    id: 1,
    title: 'something',
    isCompleted: false
}, {
    id: 2,
    title: 'something',
    isCompleted: true
}, {
    id: 3,
    title: 'something',
    isCompleted: true
}, {
    id: 4,
    title: 'something',
    isCompleted: false
}]

const todoFilterd = todoArrayOfObj.filter((elem) => {
    return elem.isCompleted == false;
})
console.log('todo Filterd: ', todoFilterd);






// find method
// find method kono array return kore na
// Because find method e first e j condition meet kore, setar j element er jonno, sei element tai return kore.
const anotherArrayOfObj = [{
    id: 1,
    title: 'something',
    isCompleted: false
}, {
    id: 2,
    title: 'something',
    isCompleted: true
}, {
    id: 3,
    title: 'something',
    isCompleted: true
}, {
    id: 4,
    title: 'something',
    isCompleted: false
}]

const findOutput = anotherArrayOfObj.find((el) => {
    return el.title = 'something';
})
console.log('find method output: ', findOutput);

// another example 
const demoArray3 = [10, 20, 23, 30, 40];
const findOutput2 = demoArray3.find((ele) => {
    return ele % 2 == 0;
});
console.log('find another example: ', findOutput2);






// findIndex
// findIndex o array dey na. just index dey. first e j element er jonno condition meet kore, sei element er index dey.
// first e j condition meet kore , shudu tar tai diye dey. Ekadik thakleyo lav nai. 
const arrayOfObject = [{
    id: 1,
    title: 'something',
    isCompleted: false
}, {
    id: 2,
    title: 'something',
    isCompleted: true
}, {
    id: 3,
    title: 'something',
    isCompleted: true
}, {
    id: 4,
    title: 'something',
    isCompleted: false
}]

const todoIndex = arrayOfObject.findIndex((ele) => {
    return ele.isCompleted == false;
})
console.log('todoIndex: ', todoIndex);



// includes
// string er moddhe kono value ase kina, ta khojar jonno includes
// value thakle true output dibe, r na thakle -1 output dibe.
const stringArray = ['abc', '123', 'ab', 'abcd', 'xyz'];

console.log('includes :', stringArray.includes('ab'));

console.log('Another includes :', stringArray.includes('faisal'));






// every 
// প্রত্যকটা condition er jonno সত্য  hole, true output dibe.
// প্রত্যকটা condition er jonno সত্য na hole, false output dibe.
const arrayOfObject1 = [{
    id: 1,
    title: 'something',
    isCompleted: false
}, {
    id: 2,
    title: 'something',
    isCompleted: true
}, {
    id: 3,
    title: 'something',
    isCompleted: true
}, {
    id: 4,
    title: 'something',
    isCompleted: false
}]
const everyOutput = arrayOfObject1.every((el) => {
    return el.isCompleted == true;
})
console.log('See every output: ', everyOutput);

// another example of every method 
const numbers = [10, 20, 25, 30, 40];
const everyResult = numbers.every((el) => {
    return el % 2 == 0;
})
console.log("every Result: ", everyResult);
// output false asbe, karon , sob gula even number na.
// 25 odd number.
// every er jonno sob gulai true hoya lagbe.







// some 
// যে কোনো একটা  condition er jonno সত্য  hole, true output dibe.

const myArrayOfObject = [{
    id: 1,
    title: 'something',
    isCompleted: false
}, {
    id: 2,
    title: 'something',
    isCompleted: true
}, {
    id: 3,
    title: 'something',
    isCompleted: true
}, {
    id: 4,
    title: 'something',
    isCompleted: false
}]
const someOutput = myArrayOfObject.some((el) => {
    return el.isCompleted == true;
})
console.log('See some output: ', someOutput);


// another example of some method 
const myNumbers = [10, 20, 25, 30, 40];
const someResult = myNumbers.some((el) => {
    return el % 2 == 0;
})
console.log("some Result: ", someResult);
// output true asbe, karon , ekta condition true hoilei hoilo. 







// flat 
// flat nested array er khetre, 1 level porjonto jaite pare.
//  1 level er besi jawar jonno bole dite hoy. Jemon: flat(2);
// 1 level/ Tar besi jawar jonno Infinity bole deya jay. Jemon: flat(Infinity);
const nested = [1, 2, [3, 4], 5];
const flatArray = nested.flat();
console.log('myFlat :', flatArray);

// second level nested 
const nested1 = [1, 2, [3, 4, [5, 6, 7]], 8];
const myflatArray = nested1.flat(2);
console.log('myflatArray :', myflatArray);


// many level nested 
const nested3 = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10, 11]], 12]], 13];
const moreflatArray = nested3.flat(Infinity);
console.log('moreflatArray :', moreflatArray);





// splice
// array theke element delete or add korar jonno splice use kora hoy.
// existing array k change kore fele.
const niceArray = [10, 20, 30, 40, 50, 70];
// splice er 3 ta value, new data add korte na caile, prothom 2 ta value dilei hobe. 
// first value : kon position theke start hobe,
// second value : koyta delete korte hobe,
// third value : J data ta add korte hobe, sei data ta.
console.log('splice example 1: ', niceArray.splice(0, 2));
console.log('change hoyar por splice: ', niceArray);


const niceArray1 = [10, 20, 30, 40, 50, 60];
// zero index e new data add korar jonno 
niceArray1.splice(0, 0, 70, 80);
console.log('see add hoyar por, using splice: ', niceArray1);


const niceArrayOfObject = [{
    id: 1,
    title: 'something',
    isCompleted: false
}, {
    id: 2,
    title: 'something',
    isCompleted: true
}
]
// first index e new data(array) add korar jonno 
niceArrayOfObject.splice(1, 0, {
    id: 3,
    title: 'nothing',
    isCompleted: true
});
console.log('see object add hoyar por, using splice: ', niceArrayOfObject);







// slice
const sweetArray = [10, 20, 30, 40, 50, 60];
// array theke element kete neyar jonno slice use kora hoy.
// existing array k change kore na. main array change hoy na.
console.log('j gula k kete nisi, using slice: ', sweetArray.slice(0, 3));
console.log("Main array(change hoy nai) after slice: ", sweetArray);






// indexOf
// array te nai emon kisu indexOf korle, -1 asbe. 
// jodi same value ekadik bar thake , tahole o indexOf shudu first er index tai dibe. find er moton. Jemon 23 dui bar ase.
const goodArray = [10, 20, 23, 30, 40, 50, 60, 23, 65];
console.log('23 value ta array er kon index e ase: ', goodArray.indexOf(23));

// array te nai emon kisu indexOf korle, -1 asbe.
console.log('25 value ta array er kon index e ase: ', goodArray.indexOf(25));


// jodi same value ekadik bar thake , tahole o indexOf shudu first er index tai dibe. find er moton.
// tar mane amra indexOf diye first index pelam.
// tahole last index kivabe pabo ? ==> setar jonno lastIndexOf use korte hobe.






// lastIndexOf()
// 23 ase 3bar, but output asbe, last 23 er index ta
const goodArray1 = [10, 20, 23, 30, 40, 23, 34, 50, 23, 60, 65];
console.log('last Index of: ', goodArray1.lastIndexOf(23));






// push()
// push array theke last e value ta add kore dey and array k change kore dey, mane oi array te jeta add korse, seta o thakbe. 
const jossArray = [25, 24, 35, 27, 38, 78];
jossArray.push(100);
console.log("See after push, array: ", jossArray);







// pop()
// pop array theke last er value ta remove kore dey and array k change kore dey, mane oi array te jeta remove korse, seta r thakbe na. 
const jossArray1 = [2, 4, 5, 7, 8, 78];
const popValue = jossArray1.pop();
console.log('J value ta pop kora hoise: ', popValue);
console.log("See after pop, array: ", jossArray1);




// unshift()
// array er shuru te value add kore, 
const unshiftArray = [23, 45, 67, 78, 65];
unshiftArray.unshift(23000);
console.log('after unshift applied: ', unshiftArray);





// shift()
// array er shuru te value remove kore, 
const shiftArray = [500, 7, 23, 45, 67, 78, 65];
const shiftValue = shiftArray.shift();
console.log('J value ta shift kora hoise: ', shiftValue);
console.log('after shift applied: ', shiftArray);






// sort 
// sort() without takigng callback function for string sort.
// number sort er jonno sort() er vitore function dite hobe

// for string sort
const stringSort = ['jan', 'feb', 'mar', 'apr'];
console.log('String Sort: ', stringSort.sort());


// another way 
const anotherStringSort = ['Jan', 'Feb', 'Mar', 'Apr'];
anotherStringSort.sort((a, b) => {
    const x = a.toLowerCase();
    const y = b.toLowerCase();
    return x == y ? 0 : x > y ? 1 : -1;;
})
console.log('string sort ascending order: ', anotherStringSort);





const sortArray = [23, 45, 67, 89, 13, 14, 16];
// for ascending order 
sortArray.sort((a, b) => a - b);
console.log('after sorted ascending order array: ', sortArray);

// for descending order 
sortArray.sort((a, b) => b - a);
console.log('after sorted descending order array: ', sortArray);




// join()
// array k string banano hobe 
const numberArray = [22, 14, 36, 27, 88, 19];
const makeString = numberArray.join('');
console.log('array k string banano hobe: ', makeString);





// concat()
// concat new array dey 
// kintu ager array change kore na
const numberArray1 = [22, 14, 36, 27, 88, 19];
const makeConcat = numberArray1.concat(500);
console.log('after concat: ', makeConcat);









