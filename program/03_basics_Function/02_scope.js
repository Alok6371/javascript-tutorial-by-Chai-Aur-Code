var c = 3000
let a = 300
if (true) {
    let a = 10 //you can use let bcs it takes the global and local value
    const b = 20
    var c = 4000  //Do not use var bcs ti alwats take the local value

    // console.log("Inner: " + a);
    // console.log("INNER:" + c)
}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Alok";

    function two() {
        const website = "Youtube"
        console.log(username)
    }
    console.log(website) // it can not be excute bcs parent fun cannot take value of the child

    two() //used to excute program
}
// one()

if (true) {
    const username = "Alok"
    if (username === "Alok") {
        const website = "Youtube"
        // console.log(username+" " + website)
    }
    // console.log(website) // scope is child fun
}
// console.log(username) // scope is parent fun


//++++++++++++++++++++ INTERSTING ++++++++++++++++++++++

// addone(5)
console.log(addone(4))
function addone(num) {
    return num + 1;
}

addTwo(5)
const addTwo = function (num1) {
    return num1 + 2
}
