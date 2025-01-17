// let js = 'Amazing';
// console.log(30 + 20 + 20 + 2 - 4);
// console.log("Mallikarjun");
// console.log(34);
// let firstName = "Mallikarjun";
// console.log(firstName);
// let PI = 3.14;

// let country = "India";
// let continent = "Asia";
// let population = 1300000000;
// let finlandpopulation = 6000000;
// let averagepopulation = 13000000
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log("Half of the population =" + population / 2);
// population += 1;
// console.log(population);
// console.log(population > finlandpopulation)
// console.log(population < averagepopulation)
// console.log(country + " is in " + continent + " and " + population / 2 + " people speaks Kannada")

// const marksmass = 78;
// const marksheight = 1.69;
// const johnsmass = 92;
// const johnsheight = 1.95;
// let marksBMI;
// let johnsBMI;
// let BMIMarkhigherthanjohn = false;

// marksBMI = marksmass / (marksheight * marksheight);
// console.log("Marks BMI is : " + marksBMI);
// johnsBMI = johnsmass / (johnsheight * johnsheight);
// console.log("Johns BMI is : " + johnsBMI);

// BMIMarkhigherthanjohn = marksBMI > johnsBMI;
// console.log("Mark's BMI (" + marksBMI + ") is higher than Johns (" + johnsBMI + ")");

// console.log(typeof johnsmass);
// console.log('I am ' + 30 + ' years old');
// console.log('23' - '10' - 2 + '2');
// console.log('Malli' - '10');

/*
let javasriptusing = true;
console.log(javasriptusing);
console.log(typeof 23);
console.log(typeof "Malli");
console.log(typeof javasriptusing);
javasriptusing = "Yes";
console.log(typeof javasriptusing);

let test;
console.log(test);
console.log(typeof test);

test = "123";
console.log(typeof test);
*/

//Match 1
// const DolphinAveragescore = (96 + 108 + 89) / 3;
// const koalasAveragescore = (88 + 91 + 110) / 3;

// if (DolphinAveragescore > koalasAveragescore) {
//     console.log("Dolphins win the match")
// } else if (koalasAveragescore > DolphinAveragescore) {
//     console.log("koalas win the match")
// } else {
//     console.log("Match is draw between two teams ")
// }

// //Bonus 1
// const DolphinAveragescorebonus1 = (97 + 112 + 101) / 3;
// const koalasAveragescoreonus1 = (109 + 95 + 123) / 3;

// if (DolphinAveragescorebonus1 > koalasAveragescoreonus1 && DolphinAveragescorebonus1 >= 100) {
//     console.log("Dolphins win the match")
// } else if (koalasAveragescoreonus1 > DolphinAveragescorebonus1 && koalasAveragescoreonus1 >= 100) {
//     console.log("koalas win the match")
// } else {
//     console.log("Both win the trophy")
// }

// //Bonus 2
// const DolphinAveragescorebonus2 = (97 + 112 + 80) / 3;
// const koalasAveragescoreonus2 = (109 + 95 + 50) / 3;

// if (DolphinAveragescorebonus2 > koalasAveragescoreonus2 && DolphinAveragescorebonus2 >= 100) {
//     console.log("Dolphins win the match")
// } else if (koalasAveragescoreonus2 > DolphinAveragescorebonus2 && koalasAveragescoreonus2 >= 100) {
//     console.log("koalas win the match")
// } else if (DolphinAveragescorebonus2 === koalasAveragescoreonus2 && DolphinAveragescorebonus2 >= 100 && koalasAveragescoreonus2 >= 100) {
//     console.log("Both win the trophy")
// } else {
//     console.log("Nobody wins the Match");
// }

// const billvalue = 275;
// let discountvalue = 0;
// const discountpercentage = billvalue >= 50 && billvalue <= 300 ? 15 : 20;

// discountvalue = (discountpercentage / 100) * billvalue;

// console.log(`Bill value is :${billvalue}`);
// console.log("Discount Percentage is :" + discountpercentage);
// console.log("Discount value is :" + discountvalue);
// console.log(`Total value is ${billvalue + discountvalue}`);
// console.log(now);

const marksWeight = 78;
const marksHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
const JohnsBMI = johnWeight / johnHeight ** 2;

marksBMI = Math.round(marksBMI, 2)

const markHigherBMI = marksBMI > JohnsBMI;

console.log("Mark's BMI is :" + marksBMI);
console.log("John's BMI is :" + JohnsBMI)

if (markHigherBMI == true) {
    console.log("Mark has higher BMI than John")
}

for(var i=0;i<=20;i++)
{
    console.log(i)
}

