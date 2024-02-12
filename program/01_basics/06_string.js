

const name="Alok"
const repoCount=50

// console.log( typeof name)

//console.log(name+ repoCount+ "Value")

// console.log(`Hello  My name is ${name}and My repository is ${repoCount}`) ///String Interpulation

const gameName=new String('Alok Kumar Pradhan');
// console.log(gameName)
// console.log(typeof gameName)

// console.log(gameName[3])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString=gameName.substring(-7,4);
// console.log(newString);

const anotherString=gameName.slice(-8,4);
// console.log(anotherString)

const newString1="     Alok       "
// console.log(newString1)
// console.log(newString1.trimStart())
// console.log(newString1.trimEnd())

const url="http://Code with %harry.com"
console.log(url)
console.log(url.replace('harry','alok'))

console.log(url.includes('harry'));
console.log(url.includes('alok'));

console.log(gameName.split(' '));