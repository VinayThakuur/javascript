// arrays in javascript

// arrays can be declared by the following ways

const myArr = [1,2,3,4,5]

const myHeroes = ["Ironman","BAtman"]

const myArr2 = new Array(1,2,3,4,)
// console.log(myArr2[2]);


// Methods of an arrays..............

// myArr.push(6)// this method is used to add the values in the existing array
// myArr.push(7)
// myArr.pop() // this method just simply deletes or erases the last value of the array
// myArr.unshift(4)// this method pushes the value on the starting of the array ... 
// this is less recommended because this pushses all the values of the array and makes the operartion more time comsuming
// myArr.shift() //this erases the first value of the array
// console.log(myArr.includes(9));  // this gives answer in boolean form
// console.log(myArr.indexOf(4));

// const newArr = myArr.join(); //this binds and converts the array into String

// console.log(myArr);

//slice & spice

console.log("A",myArr);

const nA1 = myArr.slice(1,3)
console.log(nA1);

console.log("B",myArr);

const nA2 = myArr.splice(1,3)
console.log("C",nA2)

//Use slice when you want a subset of data but want to keep your original list safe (useful in React or functional programming).
// Use splice when you actually want to update or "edit" the existing array.