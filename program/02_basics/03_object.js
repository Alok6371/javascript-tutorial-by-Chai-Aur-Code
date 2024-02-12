//  Singleton
//object.create()

/// object literals



const mySym = Symbol("Key1")

const JsUser = {
    name: "Alok",
    "Fullname": "Alok Pradhan",
    [mySym]: "Mykey1",  //Here suare backet used for the symbol neither it its work like a string
    age: 20,
    email: "Alokpra572@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Mon", "sat"]

}

// console.log(JsUser["Fullname"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym)  //object
// console.log(typeof [mySym]) //symbol

JsUser.email = "palok2405google.com"
// Object.freeze(JsUser)
JsUser.email = "palok2405microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User")
}


JsUser.greetingTwo = function () {
    console.log(`Hello Js User,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())