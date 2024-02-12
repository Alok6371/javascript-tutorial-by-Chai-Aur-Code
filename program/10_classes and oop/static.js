//props

class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`userName ${this.username}`);
    }
    static createId() {
        return `123`
    }
}
const Alok = new User("Alok")
// console.log(Alok.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        console.log("Hii");
        this.email = email
    }
}
const Iphone = new Teacher("Iphone", "i@phone.com")
console.log(Iphone);
// console.log(Iphone.createId());