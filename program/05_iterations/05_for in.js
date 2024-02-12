///syntax

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }



const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by app"
}
for (key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["py", "js", "ruby", "cpp", "java"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United state of America')
map.set('FR', 'France')

for (const key in map) {
    console.log(key);
}

