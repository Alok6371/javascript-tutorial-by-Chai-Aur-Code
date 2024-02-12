const userEmail = []

if (userEmail) {
    // console.log("Got user Email");
}
else {
    // console.log("Do not");
}

// falsy

// false = 0, -0, BigInt 0n, "", null, undefined

// truthy

// true = "0" ,'false' , " space ",[],{} , function(){}

// if (userEmail.length === 0) { //Checking is array is empty or not
//     console.log("Array is Empty");
// }
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is Empty");

}

// Nullesh Coalecsing Operator (??): null undefined

//It takes the first valuse is given
let val1;
// val1 = 5 ?? 10
// val1 = null ??
// val1 = null ?? undefined
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15


console.log(val1);


////////////ternary Operator

// condition ? true :false
const iceTeaPrice = 100
iceTeaPrice <=80? console.log("Less than 80"):console.log("More than 80");
