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

// template string 
let myId = 5;
let myUrl = 'https://jsonplaceholder.typicode.com/todos/' + myId;
console.log('third url: ',myUrl);
```



```javascript

```