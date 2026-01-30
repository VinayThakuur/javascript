const coding = [ 'js','javascript','java','phython']

// const values = coding.forEach( (item)=>{
//     console.log(item)
//     return item;  // return doesn't work in forEach loop

// })
// console.log(values)  




//filter operation .. this provides us the return of the values

const myNums = [1,2,3,4,5,6,7,8,9,10]


const newNums =  myNums.filter((numbers)=> numbers>5) // for if we are using the curly braces then this won't we correct , 
// it will become implicit


// const newNums =  myNums.filter((numbers)=> { 
    
    
//     to prevent an error we have to do this , we have to address the return function 
// or we can say if we are opening new scope then we have to write this return function , otherwise we can write the whole code in single line.
//     return numbers>5
// })

// we can also do the same thing in forEach ,but for that we have to perform a long process
// const newNums = []

//     myNums.forEach( (num)=> {
//         if(num>4){
//             newNums.push(num)
//         }

//     })



// console.log(newNums)




//example => to access the objects in an array


const library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isAvailable: true
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isAvailable: false
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    isAvailable: true
  }
];

const userBoks= library.filter( (find)=> find.author)

console.log(userBoks)