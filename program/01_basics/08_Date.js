//Dates



let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)


let myCreatedDate1 = new Date(2023, 4, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-04-2023")

// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toString());
// console.log(myCreatedDate4.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getHours())
// console.log(newDate.getMonth())
// console.log(newDate.toString())
newDate.toLocaleDateString('defult', {
    weekday: "long",
    
})