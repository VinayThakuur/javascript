//dates => date is an object
let myDate = new Date()
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());

// let myNewDate = new Date(2024,1,21)// months starts from 0
// let myNewDate = new Date("2024,01,21")// we can also write in this format ,but in dual number months starts from 01
let myNewDate = new Date("01-01-2025")// Indian standards
// console.log(myNewDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myNewDate.getTime());//used to compare.....






