
var username = "pradhan"

const user = {
    username: "Alok",
    price: 999,
    welcomeMsg: function () {
        console.log(`${this.username},Welcome to Website`);
        console.log(this)
    }

}
// user.welcomeMsg()
// user.username="Alok Pradhan"
// user.welcomeMsg()

// console.log(this)

function chai(){
    let username="Alok" //if variable declare in side the funchtio then this keyword is not work  
    console.log(`${this.username}`)
}
chai()


// const chai=function(){
//     let username="Alok"
//     console.log(this.username)

// }
// chai()


// const chai = () => {
//     let username = "Alok"
//     console.log(this)

// }
// chai()

// const addTwo1 = (num1, num2) => {
//     // console.log(num1 + num2)
//     return num1 + num2    ///////////////////////  Explicity
// }
// // console.log(addTwo1(2,4))
// addTwo1(2,4)

// const addtwo = (num1, num2)=> num1+num2
// const addtwo = (num1, num2) => (num1 + num2)   ////////////Implicity

const addtwo = (num1, num2) => ({ username: "alok" })

// console.log(addtwo(2, 7))


