function multripleBy5(num) {
    // this.num=num
    return num * 5
}
multripleBy5.power = 43

// console.log(multripleBy5.power);
// console.log(multripleBy5.prototype);
// console.log(multripleBy5.length);


class createUser {
    constructor(username, score) {
        this.username = username
        this.score = score
    }
    increment() {
        this.score++

    }
    printMe() {
        console.log(`Price is ${this.score}`)
    }
}
const chai = new createUser("chai", 25)
const tea = createUser("tea", 100)

chai.printMe()