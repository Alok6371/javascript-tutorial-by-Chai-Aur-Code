class user {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        return this._email = "aloo"  //aloo
    }  

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}Hitesh`
    }
    set password(value) {
        this._password = value;
    }
}
const Alok = new user("err@gmail.com", "abc")
console.log(Alok.email);
console.log(Alok.password);