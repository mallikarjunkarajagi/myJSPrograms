let numbers = [1,2,20,35,12,17,46]
let evenarray = []

let evennumbers = numbers.map(n=>{
    if(n%2==0){
        evenarray.push(n)
    }
})

console.log(evenarray)

//Above is the traditional way of doint it. Now we have seperate function for filter
//Filer returns a new array containing all the elements which satisfies the condition 

const even = numbers.filter(n=>n%2 == 0)

console.log(evenarray)

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generateNumbers();
console.log(generateNumbers().next().value);
console.log(generateNumbers().next().value);
console.log(generateNumbers().next().value);
for(let x=0;x<10;x++)
{
    console.log(gen.next().value); // Output: 1
}

