function* genrate(i) {
    console.log('A');
    yield i;
    console.log("b");
    yield i + 2;
}
const gen = genrate(20)
console.log(gen.next().value);
console.log(gen.next().value);


