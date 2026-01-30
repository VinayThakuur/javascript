// for in loop 
// best to loop objects
//maps are not iterateble in this

const myobj ={
    js : 'javascript',
    rb : 'ruby',
    swift : 'swift by apple',
    cpp : 'c++'
}
// to loop through keys of objects
for (const key in myobj) {
//  console.log(key)
    
}
// to loop through values of objects

for(const key in myobj){
    // console.log(myobj[key])
}
//for both use your brain dude

for (const key in myobj){
    // console.log(`${key} shortcut for ${myobj[key]}`)
}


//arrays 

const myArr = ['ironman','superman', 'batman']

for(const heroes in myArr){
    console.log(myArr[heroes])
}


