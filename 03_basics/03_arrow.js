// this = object which is calling the function, 

// Key Points:
// Regular function: this refers to the context from where it’s called (like an object or global scope).
// Arrow function: this doesn’t change based on how it’s called—it uses the this from the surrounding scope.

// "this refers to the object that calls the function.
// Inside an object method (using a normal function), this points to the object.
// In a normal function called directly, this refers to the global object (or undefined in strict mode).
// Arrow functions do not have their own this; they inherit it from the surrounding scope."



// The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// 🔵Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

// 🔵Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial 
// values for the variables , functions, etc.. For variables they are 
// 'undefined' and for functions they are set to their function definition

// 🔵Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual
//  values of the variables are set. And when the functions are called it creates
//  a new 'Function Execution' context which consists of two phases
//  (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// 📝The return value of the 'Function Execution' context is passed to the Global Execution 
// Context
