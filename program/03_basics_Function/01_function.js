

function sayName() {
    console.log("A");
    console.log("L");
    console.log("O");
    console.log("K");
}
// sayName()

// function addTwoNumber(num1, num2) {

//     console.log(num1 + num2);
// }
function addTwoNumber(num1, num2) {

    // let result = num1 + num2
    // return result;
    return num1 + num2
}
const result = addTwoNumber(3, 4)
// console.log("Result "+result)

function loginUser(username = "Alok") {
    if (!username) {
        console.log("pls Enter the user name");
        return
    }
    return `${username} Just Logged In`
}
// loginUser("Alok Pradhan")
// console.log(loginUser("Alok Pradhan"))
// console.log(loginUser()) //undefined


function calculateCartPrice(...num1) { // ... is known as rest operator
    return num1

}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Alok",
    price: 200
}
function handleObject(anyobject) {
    console.log(`User Name ${anyobject.username} and Price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "Alok Praf",
    price: 300
})

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getarray) {
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue(
    [200, 1000, 10000]
))