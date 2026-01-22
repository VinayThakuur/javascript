//const tinderUser = new object() //this is a singleton object
const tinderUser = {} //this is a non-singleton object else is the same
tinderUser.name = "Swami"
tinderUser.age = 54
tinderUser.from = "columbia"

//  console.log(tinderUser)
// we can also nest the objects like if , n also concatinate them 
// like arrays fo performing the following task


const anotherThing = {

    userName : "Harry",
    userEmail : "harrypotter.google",
    userFullAddress :{
        pinCode : 175028,
        villageNpo :{
            vill : "dubai",
            po : "Abu dhabi"
        }
    }

}
// console.log(anotherThing.userFullAddress.villageNpo.po)


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

//const obj3 = Object.assign({},obj1,obj2) // we always gonna use ({}) this while we are assigning or concatinatin an object
const obj3 = {...obj1,...obj2} // prefer this spread operation more because this is more easy to use..

//console.log(obj3)


//some times in projects we have given the objects in the arrays , we can access them by using same (.)

console.log(Object.keys(tinderUser))// it's datatype will be array, we can perform various task on it . through projects this will understand better
console.log(Object.values(tinderUser))//to find the values of object
console.log(Object.entries(tinderUser))// very less used.. it shows us the key and it's value

//we can also ask for the proterty that it is available on it or not by

console.log(tinderUser.hasOwnProperty('hakya'))
