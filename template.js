//template literal is allows us to split line into multiple lines using backtick symbol

// console.log(`Scaler 
// is 
// awesome`);
// let age = 31;
// console.log(`My age is ${age}`)


// function DisplayName()
// {
//     return function inner()
//     {
//         console.log("Inner")
//     }
// }

// let myobj = {
//     name:"Malli",
//     age:32
// }
// console.log(myobj);
// console.log(myobj.hasOwnProperty('name'));

// const grandparent = {
//     greet() {
//         console.log("Hello from Grandparent");
//     }
// };
// console.log(grandparent)
// const parent = Object.create(grandparent);
// console.log(parent)


const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  console.log(person)
  console.log(me)