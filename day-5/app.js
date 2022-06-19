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