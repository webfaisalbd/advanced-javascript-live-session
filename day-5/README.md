## Arrow Function

```javascript
// normal function 
function add (a,b){
    return a+b;
}
console.log(add(20,10));


// multi line arrow function
const add2 = (a,b) => {
    return a+b;
}
console.log(add2(20,10));

// single line arrow function 
const add3 = x => x+x;
console.log(add3(20));


```

## Optional Chaining 

- Object er property access korar somoy optional chaining use kora valo.
- Asynchronous kaj jemon API theke data anar somoy  optional chaining use kora valo.

```javascript

const person = {
    name: 'Faisal',
    age: 26,

    address: {
        city: 'Dhaka',
        division: 'Dhaka'
    }
}
console.log(person.address?.city);
```



## Template string 
- Ekta string er moddhe jodi javascript er dynamic value add korte chai , tahole template string use korbo.

```javascript

let id = 5;
let url = `https://jsonplaceholder.typicode.com/todos/${id}`;
console.log('first url: ',url);


let idFunction = () => 3;
let url2 = `https://jsonplaceholder.typicode.com/todos/${idFunction()}`
console.log('second url: ',url2);

// without template string 
let myId = 5;
let myUrl = 'https://jsonplaceholder.typicode.com/todos/' + myId;
console.log('third url: ',myUrl);
```


## Destructuring in array 
```javascript


const arr = [1,2,3,4,5];

const [first,second, , ,fifth]  = arr;
console.log(first);
console.log(second);
console.log(fifth);

// taking last element of an array
const arr2 = [10,20,33,22,11,44,33,55,24,22,25,24,21,65,43,22,12,56,32,11]; 
console.log('last element of an array: ',arr2[arr2.length-1]);
```




## Destructuring in object
```javascript


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
```


## Loop

```javascript


// Loop 
let array = [10, 20, 30, 100, 50, 75];

// normal loop 
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for of loop 
for(const element of array){
    console.log(element);
}


// for in loop 
for(const element in array){
    console.log(element);
} 






let object = {
    a: 10,
    b:20,
    c:30
}
// object er moddhe for in loop
for(const key in object){
    console.log(key); // we got object property, not object value
} 



for(const key in object){
    console.log(object[key]); // now we got object value
} 




// object er moddhe for of loop
// for(const key of object){
//     console.log(key); // we get: Uncaught TypeError: object is not iterable
// } 

```


## Async await

```javascript

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
```


## Object.is method

```javascript


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


```




## Spread Operator

```javascript


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


```


## Set
```javascript



// Set 
// set always gives unique values
// A JavaScript Set is a collection of unique values.
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
console.log('total size of an array: ',set.size);
// key te kono value ase kina
console.log('set e 1  value ase kina: ',set.has(1));


```





## Map
```javascript



// Map
// normally, amra object er key hisebe kono number type/function/Object/array rakhte pari na. 
// amra object er value ei dhoroner data type rakhte pari. kintu key hisebe pari na.
// Tai jodi amader emon typer data k key hisebe rakhte chai, tokhon amader Map() use korte hobe. 

const map = new Map();
map.set(1, '11'); // eikhane 1 hosse key, r value hosse 11
map.set([1, 2, 3], false);
map.set(() => { }, [2, 4, 6]);

console.log('See the Map() :',map);




```




## Object methods:
```javascript
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



```





## Array er kichu method

## forEach
```javascript
const demoArray = [10, 20, 23, 30, 40];
// forEach
// kono kisu return kore na, tai kono array o dey na
// demoArray.forEach((element, index, wholeArray ) => {
//     console.log(element, index, wholeArray);
// })

demoArray.forEach((ele) => {
    console.log("Square of : "+ ele + ' is ' + ele*ele);
})

```


## map 
```javascript
// map 
const demoArray1 = [10, 20, 23, 30, 40];
// array return kore , tai alada kore push kora lage na.
// Normally korle, for loop kora lagto, and ekta empty array neya lagto, seikhane data push kora lagto.
// But map use koray, extra array neya lage nai, kono kisu push o kora lage nai.
// new array dorkar porle map use korbo.
const mapOutput = demoArray1.map((ele)=>{
    return ele*2;
})
console.log('Double of input: ', mapOutput);


```


## filter method
```javascript
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

const todoFilterd = todoArrayOfObj.filter((elem)=>{
    return elem.isCompleted == false;
})
console.log('todo Filterd: ',todoFilterd);


```


## find method
```javascript
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


```


## 
```javascript


```



