//-----------------------------------------------------------------
// Ability of function to retain between the multiple calls
// Clousure gives our functions, persitent memories
// -----------------------------------------------------------------

function createFunc(i) { // createFunc is a label of the function, and it refers to the function in memory
  return function(num) {
    return i*num
  }
}

//-----------------------------------------------------------------


let i = 10
const f = createFunc(i) // Execution Context is created
const v = f(11) // Able to refer variable created in execution context
// console.log("V=", v)

function outer() {
  let counter = 0;

  function increment() {
    counter +=1;
    return counter
  }

  return increment;
}

const incrementor = outer() // All of the surrounding memory attached to the function
incrementor() // This is running in global
incrementor()
const c = incrementor()
console.log("counter = ", c)
