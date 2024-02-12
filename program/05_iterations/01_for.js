//for



for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best Number");
    }
    // console.log(element);

}
// console.log(element); // not output


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop:${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Outer Loop ${j} anner Loop ${i}`);
        // console.log(i + "*" + j + "=" + i * j);
    }

}


let myArray = ["flash", "batsman", "superman"]
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 0; index <= 20; index++) {
//     if(index==5){
//         console.log("Detected 5");
//         break; /// used to break the loop
//     }
// console.log(`value of the index is ${index}`)
// }


for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue; /// used to ignore and skip
    }
    console.log(`value of the index is ${index}`)
}