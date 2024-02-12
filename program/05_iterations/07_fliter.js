// const coding = ["js", "py", "ru", "java", "cpp"]


// const value = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(value);

const myNUm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNUm.filter((num) => {
    return num > 4
    //  num > 4
})
// console.log(newNum);


//////////////without fliter
const newNum2 = []
myNUm.forEach((num) => {
    if (num > 4) {
        newNum2.push(num)
    }
})
// console.log(newNum2);

const Books = [
    {
        title: "Book one", genre: "History", publish: 2009, edition: 2010
    },
    {
        title: "Book two", genre: "non-friction", publish: 2020, edition: 2204
    },
    {
        title: "Book three", genre: "commerce", publish: 2050, edition: 2340
    },
    {
        title: "Book five", genre: "non-friction", publish: 2020, edition: 2204
    },
    {
        title: "Book four", genre: "History", publish: 2010, edition: 2010
    },
    {
        title: "Book six", genre: "commerce", publish: 2050, edition: 2340
    }
];

const userBooks = Books.filter((bk) => bk.genre === "History" || bk.publish == 2050)
const userBooks2 = Books.filter((bk1) => { 
    return bk1.publish >= 2000 
})

// console.log(userBooks);
console.log(userBooks2);
