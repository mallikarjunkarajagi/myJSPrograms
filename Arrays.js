// var profiles = [4,20.4,'Karajagi',53.4,4000,true]

// console.log(profiles.sort());

// console.log(profiles[2]);
//length method
// console.log('Length of the array is ',profiles.length);

//Inbluild methods

//1. pop

let a2 =[1,2,3];
a2.fill(0,1,2);
console.log(a2); //[1,0,3]

let a3 = [1, 2, 3, 4];
a3.copyWithin(1, 2, 4); 
console.log(a3); // [3, 4, 3, 4]


var numbers = [34,23,56,39]
console.log(numbers);
numbers.pop();
console.log('pop array ',numbers);
//splice (start index,deletcount,element to be replaced)
numbers.splice(1,1,10);
console.log('After Splice ',numbers);

//2.push
console.log(numbers.push(100,200));
console.log(numbers);

//shift
console.log(numbers.shift())
console.log(numbers);

//unshift
console.log(numbers.unshift(25));
console.log(numbers);

//sort
// var a2 = numbers.sort();
// console.log(a2);
numbers.sort(function(a, b){return a - b});
console.log(numbers);


var arr1 = [10,101,200,300]
var arr2 = []
arr1.sort(function(a,b){return a-b});
console.log(arr1);

arr1.forEach(element => {
    arr2.push(element*element)
});
console.log(arr2);

//Advanced array methods
//1.Tostring method

var fruits = ['Apple','Banana','Cherry','Pineple','Orange']

let fruitsstring = fruits.toString()
console.log(fruitsstring);
let sortedfruits = [11,2,22,1]
// console.log("Sorted fruits -->" +sortedfruits.sort((a,b) => a-b));
sortedfruits.forEach((item) => console.log(item.toString().charCodeAt(0)));


//2.Join
//it works like tostring() but you can also specify the separator
console.log(fruits.join(' * ')) 

//3.Concat
//the concat method will creates a new array by merging the existing arrays
var nuts = ['walnut','pista','cashew']

var fruitsandNuts = fruits.concat(nuts);
console.log(fruitsandNuts);