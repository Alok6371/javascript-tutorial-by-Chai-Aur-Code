// const tinderUser=new Object() //Singleton
const tinderUser = {} //constructor


tinderUser.id = "123abc"
tinderUser.name = "Alok"
tinderUser.isLogggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "saloak@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Alok",
            lastname: "Pradhan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "g@gmail.com"
    }, {
        id: 1,
        email: "g@gmail.com"
    }, {
        id: 1,
        email: "g@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogggedIn'))


const course = {
    coursename: "js in Hindi",
    price: "0",
    couseInst: "Alok"
}

const { couseInst: inst } = course
// console.log(couseInst)
console.log(inst)


// const navbar = () => {

// }
// navbar(company = "alok")

// {
//     "name":"Alok",
//     "coursename2":"js",
//     "price":"free"

// }

[
    {},
    {},
    {}
]