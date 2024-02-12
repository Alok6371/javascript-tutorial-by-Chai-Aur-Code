const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(body);
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id == 'grey') {
            body.style.background = e.target.id;
            const textcolor = body.style.color = 'pink';
        }
        if (e.target.id == 'white') {
            body.style.background = e.target.id;
            const textcolor = body.style.color = 'black';
        }
        if (e.target.id == 'pink') {
            body.style.background = e.target.id;
            const textcolor = body.style.color = '#212121';
        }
        if (e.target.id == 'green') {
            body.style.background = e.target.id;
            const textcolor = body.style.color = 'brown';
        }
        if (e.target.id == 'blue') {
            body.style.background = e.target.id;
            const textcolor = body.style.color = 'aqua';
        }
    })
})


const displayColorChanger = document.getElementById('bg_color')
let i = 1
displayColorChanger.addEventListener('click', function () {
    if (i == 1) {
        body.style.backgroundColor = '#202020'
        body.style.color = 'white'
        displayColorChanger.style.backgroundColor = '#fff'
        i += 1
    } else if (i == 2) {
        body.style.backgroundColor = '#fff'
        body.style.color = '#202020'
        displayColorChanger.style.backgroundColor = '#202020'
        i -= 1
    }

})
