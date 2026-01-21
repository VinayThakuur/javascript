const marvelHeroes =["Ironman","Spiderman","Thor"]
const dcHeroes = ["Superman","Batman","Aquaman"]


// marvelHeroes.push(dcHeroes) // push pushes the one array into another

// console.log(marvelHeroes)
// const jodHa = marvelHeroes.concat(dcHeroes) // where as concat merges the arrays and form a new array
// console.log("B",jodHa);

const newHeroes = [...marvelHeroes,...dcHeroes] // this is called spred ... 
// kaanch ka glass use this more because we can add multiple values in this
console.log(newHeroes);

const realAnotherArr =[1,2,3,4,[5,6,7,80],[3,47,4,5]] // in this situation we can also write or spread
//  this in single bracket by using =>flat

const anotherRealArr = realAnotherArr.flat(Infinity)
console.log(anotherRealArr);

console.log(Array.isArray("Harry"));
console.log(Array.from("Harry")); //we can convert any string inot array by doing this
console.log(Array.from({Name:"Harry"}));//interesting.. this will print an empty array

let score1 = 100
let score2 = 200
let score3 = 300
 
console.log(Array.of(score1,score2,score3)); // of is also used to convert elements into an array

