//if statement
// const isUserLoggedIn = true
// const temperature = 41
// if (temperature< 50){
//     console.log("temperature is less than 50")

// }else{
// console.log("temperature is greater than 50")
    
// }
// console.log("Ececuted")



// scope

const score = 299 

if(score>100){
    const power ="fly"
    // console.log(`User power ${power}`)
}

const balance = 10000
//inplicit code.. this mostly used or prefered in the single line code


//if(balance > 500) console.log("test");// not prefered

// if(balance > 1000){
//     console.log("Limit crossed")
// }else if(balance<1000){
//     console.log("You are in the limit rn")
// }else if(balance === 1000){
//     console.log("Yahi ha bhai")
// }

const userLoggedInn = true

const debitCard = true

const loggedInFromGoole = false

const loggedInFromEmail = true

// this is an and operator

if(userLoggedInn && debitCard){
    console.log("Eligible to buy course")
}

// this is an or operator

if(loggedInFromEmail || loggedInFromGoole){
    console.log("User can log in")
}