//destruction array

// let arr1 = ['Hi','I','Am','Mallikarjun']

// let [a,b,c,d] = arr1;
// console.log(b);  //this will print 'I'
// console.log(d);  //this will print 'Mallikarjun'

//Destructuring object

let person = {
    name:'Mallikarjun',
    age:31,
    gender:'M',
    Address:{
        country:'India',
        city:'Bijapur'
    },
    scores:[80,90,50]
}

let {name:n,age,gender,Address:{city:c},scores:[x,y]} = person;
//Note that we should use the same key name as in object

console.log(n);  //this will pring 'Mallikarjun'
// console.log(Address); //This will print {country: 'India', city: 'Karnataka'}
//console.log(city); //This will print Bijapur}
console.log(c); //This will print Bijapur}
//console.log(scores); //This will print [ 80, 90, 50 ]}
console.log(x); //This will print 80
