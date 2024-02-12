// fetch('http://code/com').then().catch().finally();

// const { response } = require("express");


// make  the promise

//////////////////////////////////////////one

// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task
//     //DB cells , crypography
//     setTimeout(function () {
//         resolve()
//         console.log("Async task is complted");
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("Promise consumed");
// })
//////////////////////////////////////////////////two
// new PromiseTwo(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then(function () {
//     console.log("Async 3 resolved");
// })

////////////////////////////////////three
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "Alok Pradhan", email: "palok2406@gmail.com" })
//     }, 1000);
// })
// promiseThree.then(function (user) {
//     console.log(typeof user);
//     console.log(user.username);
// })

//////////////////////////////////////////////four
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Alok", password: "alok@2003" })
        }
        else {
            reject('ERROR Something Went wrong')
        }
    }, 1000);
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolve and rejected");
    })

//////////////////////////////////////////////five
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ Coursename: "javascript", simp: "JS" })
//         }
//         else {
//             reject('ERROR: js Went wrong')
//         }
//     }, 1000);
// })

// async function consumepromiseFive() {
//     try {
//         const response = await promiseFive
//         // console.log(typeof response);  //object
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumepromiseFive()


// async function getAllUsers() {
//     try {
//         const response2 = await fetch('https://api.github.com/users/Alok6371')
//         // console.log(response2);
//         // console.log(typeof response2);
//         const data =await  response2.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/Alok6371')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

