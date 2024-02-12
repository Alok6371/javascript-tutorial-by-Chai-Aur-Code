//ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `${this.password} abc`
//     }
//     ChangeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Alok", "Palok@gmail.com", "123")
// console.log(chai.encryptPassword().toUpperCase());
// console.log(chai.ChangeUserName());

////Behind The Scence

function User(username, email, password) {
    this.username = username
    this.password = password
    this.email = email;
}
User.prototype.encryptPassword=function(){
    return  `${this.password} abc`
}

const tea = new User("tea", "Palok@gmail.com", "12D4563")

console.log(tea.encryptPassword());

