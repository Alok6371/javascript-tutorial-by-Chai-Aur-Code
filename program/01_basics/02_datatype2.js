//  primitive

// 7 types:string,Number,null,Boolean,undefined,Symbol,BigInt

const score = false;
//js is a dynamically language

const isLoggedIn = false
const outsideTemp = null
// console.log(outsideTemp)
let unseEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id)
// console.log(anotherId)
// console.log(id == anotherId)

const bigNumber = 23433336325423534259878n



//Reference(Non Primitive)

//Array,Objects,Functions


const heros = ["shaktiman", "baba", "pokemon"];

let myObj = {
    name: "alok",
    age: 22
}

const MYfunction = function () {
    // console.log("Hello World")
}

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(preemptive), Heap(Non-Preemptive)

//stack: is a get copy from the original data
// Heap: is reference the data from teh original data

let myCollegeName = "Giet,ghagapatna"
let canteenname = myCollegeName
canteenname = "Hostel beside"

// console.log(myCollegeName);
// console.log(canteenname);

let userOne={
    email:"google.com",
    phone:6371277537,
}


let userTwo=userOne

userTwo.email="palok@.com"

console.log(userOne.email);
console.log(userTwo.email);