// let arr =[1,2,3,4,5]
// let a2 = arr.flatMap((num)=>[num,num*2]);

// console.log("Array BAPRE  " + a2);

let name2 ='GADAG';
let arrname2=[];
let a4 = [...name2].join("");
let a5 = name2.split("").join("");
let a6 = Array.from(name2).join("");

console.log("A4 " + a4);
console.log("A5 " + a5);
console.log("A6 " + a6);


for(i=0;i<name2.length;i++)
{
    // console.log(name2.charAt(i))
  arrname2.push(name2.charAt(i))
}

let arraname2reverse = arrname2.reverse();
console.log(arraname2reverse);
let name2reversedstring = arraname2reverse.join("");
console.log(name2);
console.log(name2reversedstring);
let isPalindrome  = name2 === name2reversedstring?true:false;
console.log("The given is Palindrome : " + isPalindrome)

let str = "hello";
let arr = [];

for (let char of str) { // Iterate through each character
    arr.push(char);
}

const transactions =[1000,3000,4000,2000,-898,3800,-4500]
const intodollar = 80;
// arr.forEach(element => {
//     console.log(element*element)
// });

// function iseven(n)
// {
//     return n%2==0
// }

const evenstatus = arr.map(function(n){
    return n*n;
})

console.log(evenstatus)
let arr1 =[];
const dollaramounts =transactions.map((amount,index,arr1) => {return (amount/intodollar).toFixed()})

console.log(dollaramounts)
console.log('Array -', arr1)

//using foreach

transactions.forEach((amount) => {
    console.log((amount/intodollar).toFixed())
})

// console.log(dollaramounts)

//using Find : returns the first element of an array which satisfies the condition

const firstwithdranamount = transactions.find( n =>{
    return n<0
})

console.log('The first withdran amount is ',firstwithdranamount)

//FindIndex : returns the index of first element of an array which satisfies the condition

const firstwithdranIndex = transactions.findIndex(n=>{
    return n<0
})
console.log('The first withdran index is ',firstwithdranIndex)

//Some : returns the boolean value True if atleast one element of an array satisfies the condition

const isamountwithdrawn = transactions.some(n=>{
    return n<0;
})

console.log('The amount is withdrawn from the account --> ',isamountwithdrawn)

//Every returns the boolean value True if all the elements of an array satisfies the condition

const isalldeposited = transactions.every(n=>{
    return n>0;
})

console.log('All transactions are deposits? --> ',isalldeposited)