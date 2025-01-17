//Var hoisting

console.log(a);
var a = 10;
var a = 20;


// if(a == 20)
// {
//     let x =100;
// }else
// {
//     let x =110;
// }
let x = 30;
greet();
// addfun(2,3) -->  TypeError: addfun is not a function

function greet()
{
    // let x =100;
    console.log(x);
    console.log('hoisting')
}

var addfun = function(a,b)
{
    return(a+b);
}

var result = addfun(3,4);
console.log(result);


// function fun() {
//     console.log(name);
//     let name = 'Mukul Latiyan';
//   }
//   fun(); // Reference error

