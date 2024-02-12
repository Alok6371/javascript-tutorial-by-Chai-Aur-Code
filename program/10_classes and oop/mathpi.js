const Descptiter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Descptiter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


// const myObj = new Object.create()

const chai = {
    name: 'ginger chai',
    price: 1234,
    isAvailable: true,

    OrderChai: function () {
        console.log("Chai nhi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true,
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    // Object.entries(chai)  used for iterable
    if (typeof value !== 'function') {
        console.log(`${key} & ${value}`);
    }
}