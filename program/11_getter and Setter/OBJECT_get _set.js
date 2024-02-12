///////////////////////// o/p changable 
const User = {
    _email: 'email.com',
    _password: 'password',

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this.email = value
    }
}
// console.log(User.email);

const tea = Object.create(User)
console.log(tea.email);



/////the o/p same as the i/p and non changeable
const User1 = {
    num: [6371277537],
    num1: "6371277537",
    num2: 63712777537
}
console.log(typeof User1);  //Object
console.log(typeof num);
console.log(typeof (User1.num)); //Object
console.log(typeof (User1.num2)); //Number
console.log(typeof (User1.num1)); //String