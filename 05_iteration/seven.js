//Think of a map() in JavaScript as a transforming machine. 
// You give it a list of items (an array), tell it a specific rule for how to change those items, 
// and it spits out a brand-new list with those changes applied.


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.map((num)=> num+10)


// filter in javaScript

// If map() is a transforming machine, then filter() is a security guard at a club.

// It looks at every item in your array, checks it against a specific "rule" (a condition), and 
// only lets the items that pass the test through to a brand-new array.

// How it works (The Analogy)
// Imagine you have a crate of fruit, but some of it has gone bad.

// The Input: A crate of mixed good and rotten fruit.

// The Test: "Is this fruit fresh?"

// The Result: A new, smaller crate containing only the fresh fruit.

// Crucial point: Like map(), the filter() method does not change your original array. It just gives you a filtered copy.


//chaining =>means we are applying multiple methods at a same time 
// in chaining the new method picks the value form the previous value of the previous method

const newNum =myNums
              .map((num)=>num +10)
              .map((num)=>num *2)
              .filter((num)=>num >30)

console.log(newNum)
