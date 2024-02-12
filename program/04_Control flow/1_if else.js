//if


const tepperature = 41
if (tepperature === 41) {  //=== is check also the typeof
    // console.log("Less than 50")
}
else {
    // console.log("Temp is greate than 50");
}

//  <,>,<=,>=,==,!=,===,!==

// const score = 200

// if (score > 100) {
//     const power = "fly"; //if user var then it can use global
//     console.log(`user Power :${power}`);
// }
// console.log(`user Power :${power}`);

const balance = 1000

// if (balance > 500) console.log("test"),console.log("Test2");

if (balance < 500) {
    // console.log("less Than 500")
} else if (balance < 700) {
    // console("Leaa than 700")
} else if (balance < 900) {
    // console.log("Less than 900")
} else {
    // console.log(`Less than 1200`)
}

const userLoggedIn = true
const debitCard = false
const LoggedInFormGoogle = false
const LoggedInFormEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy");
}

if (LoggedInFormGoogle ||LoggedInFormEmail) {
    console.log("User Logged In");
}