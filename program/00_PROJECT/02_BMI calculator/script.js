const forms = document.querySelector('form');
let body = document.querySelector('body')

//use this case  will be empty
// const height=parseInt(document.querySelector('#height').value)
// console.log(height);



forms.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')

    // if (height === "" || height < 0 || isNaN(height)) {
    //     results.innerHTML = (`Please a valid Weight ${height}` )
    // }
    // else {
    //     const re=results.innerHTML = (`valid Weight ${height}`)
    //     // alert(re)
    // }
    // if (weight === "" || weight < 0 || isNaN(weight)) {
    //     results.innerHTML = (`Please a valid Weight ${weight}` )
    // }
    // else{
    //     const re=results.innerHTML = (`valid Weight ${weight}`)
    //     // alert(re)
    // }

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = (`Please a valid Weight ${height}`)
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = (`Please a valid Weight ${weight}`)
    }
    else {
        var bmi = ((weight / ((height * height) / 10000)).toFixed(3));
        // show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
    if (bmi >= 4) {
        console.log(body);
        body.style.background = 'red';
    }

})


////////////////generate a color in hex form

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color;
}


const height = document.getElementById('height')
height.addEventListener('keypress', function (e) {
    let previousColor = randomColor()
    document.getElementById('heightColorName').innerHTML = previousColor;
    body.style.backgroundColor = previousColor;
    e.stopPropagation();

    height.addEventListener('click', function () {
        body.style.backgroundColor = previousColor;
    })

})


const weight = document.getElementById('weight')
weight.addEventListener('keypress', function (f) {
    let previousColor = randomColor()

    document.getElementById('weightColorName').innerHTML = randomColor();
    body.style.backgroundColor = previousColor;
    f.stopPropagation();
    weight.addEventListener('click', function () {
        body.style.backgroundColor = previousColor;
    })

})













document.getElementById('button').addEventListener('click', function () {
    body.style.backgroundColor = randomColor()
})
