let map = new Map();
map.set("Name","Mallikarjun");
map.set("Age",32);
map.set("EmpId",196);

//get the value
console.log(map.get("Name")) //output : Mallikarjun
console.log(map.has("Age")) // output : true
console.log(map.size) //output : 3

for(let [key,value] of map)
{
    console.log(key,value);
}

map.delete("Age");

for(let [key,value] of map)
{
    console.log(value);
}

let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add("Malli");
set.add(1);

set.delete(2);
console.log(set.size);
console.log(set.has(2));
// set.clear();

for(let value of set)
{
    console.log(value);
}

//set Ideal for removing the duplicate value from Array

let arr1 = [1,2,3,4,2,1,5]

let arr2 = [...new Set(arr1)];

for(let value of arr2)
{
    console.log(value);
}
