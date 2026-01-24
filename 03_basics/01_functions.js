function sayMyName (){
    console.log("H")
    console.log("a")
    console.log("r")
    console.log("r")
    console.log("y")
    
}

// sayMyName ();   //calling function where sayMyName is reference and () is execution

function addTwoNumbers (number1 , number2){

    return number1 + number2

}

// console.log(addTwoNumbers(4,-5))

//another way

// function loginUserName (username){
//     return `${username} just logged in `
// }
// console.log(loginUserName("Harry"))

//with if statement

// function userLog(username){
//     if(!username){
//         console.log("please enter a username")
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(userLog("Harry"))

function calculateCartPrice(...num1){

    // (...) is also known as rest opereator , it's used to take mutltiple values 
    // in function,by looks it is similar to spreat operator but both of them have different 
    // function . The javaschipt understand itself that where what we are using

    return num1
}
// console.log(calculateCartPrice(100,200))

const user ={
    userName:"Harry",
    age:45
}
function handleObject(anyobject){
   console.log(`The username is ${anyobject.userName} and the age of the user is${anyobject.age}`) 
    return 

}
// handleObject(user)

 // or we can directly declare the object by
// handleObject({
//     userName: "sam",
//     age:65
// })

// arrays in fuction 

const newArrays =[300,400,800,900]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(newArrays))

// same as the the objece we can pass the array in function by

// console.log(returnSecondValue([200,400,500,8000]))
function newFun(user){
     console.log(`The name of the user is ${user.name} and the price is ${user.price}`)
     return
}
newFun({
    name: "Harry",
    price:500
})