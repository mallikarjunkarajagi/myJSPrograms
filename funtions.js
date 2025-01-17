//Basic functions

// function Greet()
// {
//     console.log('Hello');
// }

// Greet();

// function add(a,b)
// {

//     return a+b;
// }

// var x = add(4,5);
// console.log(x);

//Functions as expressions

// var sum = function(a,b)
// {
//     console.log('Calculating sum of 2 numbers')
//     return a+b;
// }

// const test = (x) =>{
//     return x*x%2==0?true:false;
// }

// console.log('The number is even number-',test(5))

// var result = sum(4,5);
// var res1 = sum;
// console.log(res1);

// var res2 = res1(5,7);
// console.log(res1(5,7));


// function checkAge(data) {
//     console.log(`age is ${data.age}`);
//     if (data === { age: 18 }) {
//     console.log("You are an adult!");
//     } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//     } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//     }
//    }
   
//    checkAge({ age: 18 });

// function fn(){
//     return 4+5;
//    }
//    var t = fn(3,4);
//    console.log(`value of T is ${t}`);

//    setTimeout(function () {
//     console.log("This is an anonymous function.");
// }, 5000);

// function greet() {
//     console.log(`Hello, ${this.name}`);
// }

//greet.call({ name: "Alice" }); // Output: "Hello, Alice"
// greet.call();

// function Timer() {
//     this.seconds = 0;

//     setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds); // Arrow function uses `this` from Timer
//     }, 1000);
// }

// new Timer(); // Increments and logs seconds every second

// function test()
// {
//     let value = 20;
//     console.log(this.value); //this refers to global object
// }

// test(); //this refers to global object in standalone function

// const test2=test.bind({"value":30});
// test2(); //global object is substituted with the object sent


// async function test21()
// {
//     return new Promise(resolve => setTimeout(() => {
//         console.log("Hello Dear!")
//         resolve("Hello!")
//     }, 10000));
// }

// async function test22()
// {
//     test21()
//     .then(data => setTimeout(() => {
//         console.log("First then completed");
//     }, 5000))
//     .then(result => setTimeout(() => {
//         console.log("Second then completed")
//     }, 5000))
//     .catch(error => console.log(error));
    
// }

// test22();


// obj1 ={
//     value:40,
//     arrowfunc: ()=> console.log(this.value)
// }

// obj1.arrowfunc();


// function Timer() {
//     this.seconds = 0; // A property 'seconds' is added to the newly created object.

//     setInterval(() => {
//         this.seconds++; // Arrow function captures 'this' from the surrounding context (the Timer instance).
//         console.log(this.seconds);
//     }, 1000);
// }

// new Timer();

// function test()
// {
//     console.log(this.seconds);
// }

// test();


class Parent {
    constructor(){
        console.log("constructor from Parent!");
    }
    greet() {
        console.log("Hello from Parent!");
    }
}

class Child extends Parent {
    constructor() {
        super();
        this.arrowFunc = () => {
            super.greet(); // `super` is inherited from the enclosing constructor
        };
    }
}

const child = new Child();
child.arrowFunc(); // Output: "Hello from Parent!"

