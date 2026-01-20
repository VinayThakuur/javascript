const name = "Harry"
const repoCount = 50

// console.log(name + repoCount + " ye hai ji....");

//this is outdated way of combining string , so instead this we gonna use this =>

console.log(`Hello my name is ${name} and myCount is ${repoCount} `);// we gonna use this 
// because this is modern and new 
// there is an another way to declare a string
const myName = new String ('Harry-Potter')
// console.log(myName [4]);
// console.log(myName.__proto__);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.charAt('6')); 
console.log(myName.indexOf('t'));


const newString = myName.substring(0,6)   // we cann't use negative values on this , 
// this doesn't obbey our instructions


console.log(newString);


const anotherString = myName.slice(-8,8)  // in slice we can give negative values
console.log(anotherString);

//trim & replace method

const newStr = "    Harry     "
console.log(newStr);
console.log(newStr.trim());

//replace
const url= "https://Harry.com/harry%20potter"
// console.log(url.replace('%20','-'));
// console.log(url.repeat(4));
 
//we can also ask values of string that these values are present in it or not by=>

console.log(url.includes("Harry"))
console.log(url.split('/'));




















