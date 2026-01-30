// for of loop

// ["","",""]
// [{},{},{}]

// const arr = [ 1,2,3,4,5]
// // we can apply this loop in strings , arrays and objects as well
// for (const val1 of arr) {
//     console.log(val1)
    
// }

const fruits = ['apple', 'banana','orange']

for(const fruit of fruits){
    // console.log(fruit)
}

//maps
// we cann't declare same values in the maps
const map = new Map()
map.set('In',"India")
map.set('US',"United States")
map.set('Fr','France')
//  console.log(map)

//how to loop around map.... it converts maps object into array

for (const con of map) {
    // console.log(con)
}

//if you don't need it in array form
for(const [key,value]of map){
    //  console.log(key ,':-', value)
}


// object
const myObj = {
    username : "Harry Lal",
    userEmail : "harry69@gmail.com",
    userAge: 45
}


for (const detail of myObj){
    // console.log(detail)
}