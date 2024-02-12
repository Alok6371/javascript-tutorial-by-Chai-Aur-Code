class User {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`New course added by ${this.username}`);
    }
}

const chai = new Teacher("Hitesh", "Chai@gmail.com", "123")
chai.logme();
chai.addCourse();

const masalachai = new User("masala Chai")
masalachai.logme()

console.log(chai instanceof User);