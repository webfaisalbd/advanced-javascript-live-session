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





