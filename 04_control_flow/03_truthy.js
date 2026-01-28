// const userEmail = "h@gmail.com"

// if(userEmail){
//     console.log("got the email")
// }else{
//     console.log("Enter a valid userEmail")
// }

// falsy values 

// false, -0 , 0 , BigInt 0n , "", null, undefined, NaN. ..................

// truthy values 

// "0" , 'false', ' ' , [] , {} , function(){}......


// to check the array or objects are empty or not

// const arr = []

// if(arr.length ===0){
//     console.log("The array is empty")
// }else{
//     console.log("The array is not empty")
// }

// const emptyObj = {}

// if(Object.keys (emptyObj).length===0){
//     console.log("The object is empty")
// }else {
//     console.log("The object is not empty")
// }

// nullish coalescing operator (??): null, undefined... 


let val1 ;
// val1 = 1 ?? 2
// val1 = null ?? 19  // so basically it kind of transfer the control from one value to the other if the value if null or undefined
val1 = undefined ?? 19

val1 = undefined ?? 20 ?? 38// in this situation this displays the first value
 console.log(val1)

//ternary operator 

//consition  ? true:false
// const price = 288
// price <= 200 ? console.log("price is less than 200") : console.log("price is more than 200")

