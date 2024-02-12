//  for of

//itrator
// ["","","",""]
//[{},{},{},{}]


for (const iterator of object) {
    
}



const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const getting = "Hello World"
for (const greet of getting) {
    if (greet == " ") {
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

//////////////////Maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United state of America')
map.set('FR', 'France')

// console.log(map);

for (const key of map) {
    // console.log(key[0]);
}

for (const [key] of map) {
    // console.log(key[1]);
}

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObj = {
    'game1': 'NFS',
     game2: 'free'
}
// for (const keys of myObj) {
//     console.log(keys);   //////////////object is not iteratable
// }

