// var person = {
//     firstname : "Mallikarjun",
//     lastname : 'karajagi',
//     age:31
// }

// console.log(person.firstname); //accessing the object using dot notaion
// console.log(person['lastname'])  //accessing the object using brakets

//Objects can contain array or another object inside it

var captain = {
    name:"steve",
    lastname : "brookly",
    age:100,

    friends : ['kenly','henry','malli'],
    address: {
        state:"New york",
        city:
        {
            name:"brroklen",
            postalcode:"53742"
        }
    }
}

// console.log(Object.values(captain));

console.log(captain);
console.log(captain.friends);
console.log(captain.friends[2]);
console.log(captain.address.city.name);

captain.movies = ['cap america','america unfold','mysterious']
console.log(captain);

captain.age = 102;
console.log(captain);

delete captain.age
console.log(captain);

Object.keys(captain).forEach((keys) =>{
    console.log(keys + '-->' + captain[keys]);
})

Object.values(captain).forEach((value) =>
{
    console.log(value);
})

Object.entries(captain).forEach(([key,value]) =>
{
    console.log(key + '-->' + value)
})

