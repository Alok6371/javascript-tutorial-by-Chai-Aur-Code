// IIFE == Imediately Invoked Function Expressions
//used to remove global pollution
// (function)( excute)
// if use the two function then use ; in the end of the first function


(function chai() {
    //named IIFE
    console.log("DB connected")
})(); // ; is used

((name) => {
    //unnamed IIFE 
    console.log(`DB connected${name}`)
})(" Alok")
