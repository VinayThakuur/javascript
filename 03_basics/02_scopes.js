// so basically ({}) these curly braces are the scopes the code which is written in the curly
//  braces is block scope and the code which is written outside these braces is globalor independent

// the global scope is different in  node and console..


//find errors

if(true){
    const username = "Harry"
    if(username === "Harry"){
        const website = "Oh yeah!"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//++++++++++++++++++++++++  interesting   ++++++++++++++++++++++++++++++++++++++++++


function addOne(num1){
    return num1 +1
} 

addOne()

const addTwo = function(num){
    return num +2
}
addTwo()
// we can write functions from both the techniques
//we can declare function anywhere in the program ony in the addOne type, but in addTwo we 
// can see that the we have declare an variable with it , and we know that the value of 
// the variables can only execute in top to bottom manner

