// Array


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shakiman", "baba"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr);
// console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// myArr.pop()

// console.log((myArr.includes(9)));
// console.log(typeof(myArr.includes(9)));
// console.log((myArr.includes(2)));
// console.log(myArr.indexOf(1))

myArr.unshift(9)
myArr.shift()

const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr))



////Slice ,splice

console.log("My Arr is =",myArr)
console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3) // If using splice then the original value is changed
console.log(myn2)
console.log("C",myArr)






