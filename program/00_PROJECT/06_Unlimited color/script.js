//generate a random Color through hexa

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let Intevalid

const startchangeingColor = function () {
    if(!Intevalid){
    Intevalid = setInterval(changeBgColor,1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()

    }
}

const stopchangeingColor = function () {
    clearInterval(Intevalid);
    Intevalid = null;
}



document.querySelector('#start').addEventListener('click', startchangeingColor);

document.querySelector('#stop').addEventListener('click', stopchangeingColor)