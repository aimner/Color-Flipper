import { scrollColorPanel, changeColorScroll, chooseColorClick, chooseColorMove } from "./modules/changeColorFunctionInScroll.js"

const colorScroll = document.querySelector('.color_scroll')
const colorPanel = document.querySelector('.color_panel')




// changeColor.addEventListener('click', () => {
//     let firstNumber1 = Math.floor(Math.random() * 250)
//     let secondNumber1 = Math.floor(Math.random() * 250)
//     let thirdNumber1 = Math.floor(Math.random() * 250)
//     let firstNumber2 = Math.floor(Math.random() * 250)
//     let secondNumber2 = Math.floor(Math.random() * 250)
//     let thirdNumber2 = Math.floor(Math.random() * 250)
//     let firstNumber3 = Math.floor(Math.random() * 250)
//     let secondNumber3 = Math.floor(Math.random() * 250)
//     let thirdNumber3 = Math.floor(Math.random() * 250)
//     let firstProcent = Math.floor(Math.random() * 100)
//     let secondProcent = Math.floor(Math.random() * 100)
//     let thirdProcent = Math.floor(Math.random() * 100)
//     let degree = Math.floor(Math.random() * 360)
//     container.style.background = `linear-gradient(${degree}deg, rgba(${firstNumber1},${secondNumber1},${thirdNumber1}) ${firstProcent}%, rgba(${firstNumber2},${secondNumber2},${thirdNumber2}) ${secondProcent}%,
//     rgba(${firstNumber3},${secondNumber3},${thirdNumber3}) ${thirdProcent}%)`
//     colorTitle.textContent = `linear-gradient (${degree}deg, rgba(${firstNumber1},${secondNumber1},${thirdNumber1}) ${firstProcent}%, rgba(${firstNumber2},${secondNumber2},${thirdNumber2}) ${secondProcent}%,
//     rgba(${firstNumber3},${secondNumber3},${thirdNumber3}) ${thirdProcent}%)`
// })

colorScroll.addEventListener('mousedown', (event) => changeColorScroll(event))

colorScroll.addEventListener('mousedown', scrollColorPanel);

colorPanel.addEventListener('mousedown', (event) => chooseColorClick(event))

colorPanel.addEventListener('mousedown', chooseColorMove)

//////////////////////////////////////////////////
const degreeCircle = document.querySelector('.degree_circle');
const degreeControlCircle = document.querySelector('.degree_control_circle');
const degreePanelText = document.querySelector('.degree_panel_text')

degreeCircle.addEventListener('mousemove', (event) => {
    let mouseCorrdinatX = event.clientX - degreeCircle.offsetLeft;
    let mouseCorrdinatY = event.clientY - degreeCircle.offsetTop;
    if(mouseCorrdinatX <= degreeCircle.offsetWidth / 2 && mouseCorrdinatY <= degreeCircle.offsetHeight / 2) {
        console.log(4)
        degreeControlCircle.style.transform = `rotate(${mouseCorrdinatX * 90 / (degreeCircle.offsetWidth / 2) + 270}deg)`
        degreePanelText.value = degreeControlCircle.style.transform.split('').filter(item => !isNaN(+item) || item === '.').join('');
    }
    if(mouseCorrdinatX <= degreeCircle.offsetWidth && mouseCorrdinatX >= degreeCircle.offsetWidth / 2 && mouseCorrdinatY <= degreeCircle.offsetHeight && mouseCorrdinatY >= degreeCircle.offsetHeight / 2) {
        console.log(2)
        degreeControlCircle.style.transform = `rotate(${(mouseCorrdinatY - degreeCircle.offsetHeight / 2) * 90 / (degreeCircle.offsetHeight / 2) + 90}deg)`
        degreePanelText.value = degreeControlCircle.style.transform.split('').filter(item => !isNaN(+item) || item === '.').join('');
    }
    if(mouseCorrdinatX <= degreeCircle.offsetWidth && mouseCorrdinatX >= degreeCircle.offsetWidth / 2 && mouseCorrdinatY <= degreeCircle.offsetHeight / 2) {
        console.log(1)
        degreeControlCircle.style.transform = `rotate(${mouseCorrdinatY * 90 / (degreeCircle.offsetHeight / 2)}deg)`
        degreePanelText.value = degreeControlCircle.style.transform.split('').filter(item => !isNaN(+item) || item === '.').join('');
    }
    if(mouseCorrdinatX <= degreeCircle.offsetWidth / 2 && mouseCorrdinatY >= degreeCircle.offsetHeight / 2 && mouseCorrdinatY <= degreeCircle.offsetHeight) {
        console.log(3)
        degreeControlCircle.style.transform = `rotate(${(degreeCircle.offsetWidth / 2 - mouseCorrdinatX) * 90 / (degreeCircle.offsetWidth / 2) + 180}deg)`
        degreePanelText.value = degreeControlCircle.style.transform.split('').filter(item => !isNaN(+item) || item === '.').join('');
    }
})



// let rbgArr = ['166deg, rgba(69,255,0,1) 30%', 'rgba(42,137,208,1) 63%'];

// let rgb = `linear-gradient(${rbgArr})`;

// document.querySelector('.container').style.background = rgb;


// console.log(rgb)
let item = 5;
console.log(typeof item === 'number')