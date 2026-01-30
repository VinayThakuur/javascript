//for each loop

const coding = ['java','javascript','c++','phython']

coding.forEach(element => {
    // console.log(element)
    
})

// another way to use forEach loop
function printMe(item){
    // console.log(item)

}

// coding.forEach(printMe)  //never execute the function in this kind of situation only give reference of the function ,
//  it will automatically execute

coding.forEach((item , index , arr) => { // we have access to all these things not only item.. 
    // console.log(item, index,arr)

})



//to swap two number using array in javascript
let a= 10;
let b= 40;

[a,b] = [b,a];

// console.log(a,b)


// loop to find the multiple values of array's from an object

const ways = [
    {
    language : 'js',
    languageName : 'javascript'
    }
    ,
    {
    language : 'java',
    languageName : 'java'
    },
    {
    language : 'cpp',
    languageName : 'c++'
    }
    

]

ways.forEach( (item) =>{

    console.log(item.languageName)
})