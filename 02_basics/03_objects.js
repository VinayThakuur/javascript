//singleton
// when we declare literals then the singleton is not formed and 
// if it is declared by constructor it's always singleton

const mySym = Symbol("key")

const JsUser ={
    firstName : "Harry",
    lastName : "Potter",
    [mySym] : "mykey1",  //symbol.....
    age : 21,
    location : "Hogwards",
    email : "harrypotter69@gmail.com",
    isLoggedIn : false,
    lastloginDays : ["Monday","Wednesday"]
}
// console.log(JsUser.email);   //try to avoid this because in some cases this cann't work properly
// console.log(JsUser["location"]) // use this instead
// console.log(JsUser[mySym])  //this is symbol
// Object.freeze(JsUser)// after applying freeze we cann't change the values of the objects

//we can change the values of the objects by using (.), util we give them freeze command

JsUser.email="harrychange@gmail.com"
// console.log(JsUser.email);
// console.log(JsUser)


JsUser.greeting = function () {
    console.log(`Hello js user ${this.firstName}`)//(this) is used when we need to 
    // reference the same object
    
}
JsUser.greetingTwo = function () {
    console.log("Hello jsUser")
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

