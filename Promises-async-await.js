

// async function fetchData1() {
//     setTimeout(() => console.log("Data from API 1"), 2000);
// }

// async function fetchData2() {
//     setTimeout(() => console.log("Data from API 2"), 1000);
// }

// async function fetchData3() {
//     return new Promise(resolve =>setTimeout(() => resolve("Data from API 3"), 500));
// }

// async function fetchData4() {
//     return new Promise(resolve =>setTimeout(() => resolve("Data from API 4"), 700));
// }

// async function fetchAllData() {
// //Async functions by default returns the promises
//     await Promise.all([fetchData1(), fetchData2()]);
//     //console.log(results); // Output: ["Data from API 1", "Data from API 2", "Data from API 3"]
// }

// // fetchAllData();

// // Promise.all([fetchData3(),fetchData4()])
// // .then(data => console.log(data));

// // async function getCall()
// // {
// //     return new Promise(resolve => resolve("Data from resolve"));
// // }

// // getCall()
// // .then(data => console.log(data))
// // .catch(error => console.log(error))
// // .finally(console.log("Data cleared"))

// // const promise2 = new Promise((resolve,reject) =>{
// //     const value = false;

// //     if(value)
// //     {        
// //         resolve("Sucess!");
// //     }else{
// //         setTimeout(()=>reject("Failure!"),10000);        
// //     }
// // });

// async function promise2()
// {
//     return new Promise((resolve,reject) =>
//     {
//         const value = false;

//         if(value)
//         {        
//             resolve("Sucess!");
//         }else{
//             setTimeout(()=>reject("Failure!"),5000);        
//         }
//     })
// }

// const P1 = new Promise(resolve => {setTimeout(() => resolve("P1 done"),5000)});
// const P2 = new Promise((_,reject) => setTimeout(() => reject("P2 Done"),2000));
// const P3 = new Promise((_,reject) => setTimeout(() => reject("P3 Done"),500));

// async function test() {
//     await promise2()
// .then(data => console.log(data))
// .catch(error => console.log(error))
// .finally(console.log("Ok")); 


//  Promise.race([P1,P2])
// .then(result => console.log(result))
// .catch(error => console.log(error));
// }

// const data = test();
// // console.log(data);

// Promise.allSettled([P1,P2]).then(result => console.log(result));

// Promise.any([P2,P3]).then(result => console.log(result))
// .catch(error => console.log(error));

// Promise.race([P2,P3])
// .then(result => console.log(result))
// .catch(error => console.log(error));

async function Test23() {

        return new Promise((resolve) =>
        {
            setTimeout(() => resolve({
                Name: "Mallikarjun",
                Age:32,
                Id:196
            }),3000)
        }
        );      
   
}

Test23()
.then(data => console.log(data))
.catch(error => console.log("Error Object is ",error))

