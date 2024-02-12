const myNUm = [1, 2, 3]

// const myTotal = myNUm.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);

const myTotal = myNUm.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);

const shoppinCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:5999
    },

    {
        itemName:"ds course",
        price:12999
    },
    {
        itemName:"web course",
        price:6999
    }
]

const allValue=shoppinCart.reduce((acc,item)=>(acc+item.price),0)
console.log(allValue);