const user = {
    username: "Alok pradhan",
    loginCount: 8,
    signedIn: true,
    getUseDetails: function () {
        // console.log("Got user detais from db");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(this);  //dont get data as a global


// console.log(user.username);
// console.log(user.getUseDetails());



function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.getting = function () {
        console.log(`Welcome ${username}`);
    }

    return this ///////implictly return
}
const userOne = new User('Alok Pradhan', 12, true)
console.log(userOne.constructor);


const userTwo = new User("Asish", 11, false)
// console.log(userTwo);
console.log(userOne instanceof User);