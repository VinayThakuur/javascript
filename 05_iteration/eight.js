// If map is a transformer and filter is a security guard, then reduce() is a snowball rolling down a hill.As it rolls, 
// it picks up everything in its path and mashes it all together into one single thing—like a giant snowball, a total sum, 
// or a single combined object.
// How it works (The Analogy)Imagine you are at a grocery store checkout.
// The Input: A belt full of individual items (your array).The Accumulator: The "Total" running on the cash register screen. 
// It starts at $\$0$.The Action: The cashier scans an item, looks at the price, and adds it to the current total on the screen.
// The Result: One single number—the final bill.

// arrow function
const myNum = [1,2,3]
// const total = myNum.reduce((adder,myVal0)=> adder + myVal0 , 0)




//thats how we can do this same code by our classic function methos

const total = myNum.reduce(function (adder,myVal){
    return adder + myVal 
},0)
// console.log(total)


// another example

const cources = [
{
    course : 'Js Course',
    price : 3000
},
{
    course : 'Java Course',
    price : 2000
},
{
    course : 'DataScience Course',
    price : 12000
},
{
    course : 'py Course',
    price : 2400
},
]

const toatalPriceToPay = cources.reduce((count,prices)=> count + prices.price ,0)
console.log(toatalPriceToPay)