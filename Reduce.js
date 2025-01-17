//Reduce is basically used to calculate the sum/product of a array elements. It will return a single value

const numbers = [1,2,3,4,10]
let sum =0

const result = numbers.reduce((acc,value) =>{
    sum = acc+value;
    return sum;
},0)

console.log('The sum of array elements is ',result)

//Chaining the higher order methods.

let arr = [
    {name:"A",age:14,gender:'M'},
    {name:"B",age:34,gender:'M'},
    {name:"C",age:24,gender:'F'},
    {name:"D",age:44,gender:'F'},
    {name:"E",age:44,gender:'M'},
    {name:"I",age:28,gender:'F'},
    {name:"G",age:36,gender:'M'},
    {name:"H",age:47,gender:'F'},
]

//Get the age of all men(males)

arr.filter(n=> {return n.gender == 'M'}).map(mensarary =>{
    console.log(mensarary.age)
})


const transactions = [1000,3000,4000,2000,-898,3800,-4500]

//filter out positive and calculate the sum
let sumofpositive =0 

const sumofpositiveelements = transactions.filter(n=>{return n>0}).reduce((acc,value) =>{
    sumofpositive = acc+value;
    
    return sumofpositive;
},0)

console.log(`Sum of positive elements is ${sumofpositiveelements}`)


