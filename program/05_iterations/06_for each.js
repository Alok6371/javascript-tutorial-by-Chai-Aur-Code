const coding = ["js", "py", "ru", "java", "cpp"]

coding.forEach(function (item) {
    // console.log(item);
})

coding.forEach((val) => {
    // console.log(val);
})


function printMe(items) {
    // console.log(items);
}
coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageNameFile: "js"
    },
    {
        languageName: "java",
        languageNameFile: "java"
    },
    {
        languageName: "javascriptpython",
        languageNameFile: "py"
    },
]

myCoding.forEach(  (item) =>{
    // console.log(item.languageName,"and",item.languageNameFile);
})