import { scrollColorPanel, changeColorScroll, chooseColorClick, chooseColorMove } from "./modules/changeColorFunctionInScroll.js"
import { scrollTransparencyPanel, changeTransparencyScroll } from "./modules/changeTransparency.js"
import chooseDegree from "./modules/choseeDegree.js"

const colorScroll = document.querySelector('.color_scroll')
const colorPanel = document.querySelector('.color_panel')
const degreeCircle = document.querySelector('.degree_circle')
const transparencyScroll = document.querySelector('.transparency_scroll')





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

degreeCircle.addEventListener('mousemove', (event) => chooseDegree(event))

transparencyScroll.addEventListener('mousedown', (event) => changeTransparencyScroll(event))

transparencyScroll.addEventListener('mousedown', scrollTransparencyPanel);



// let rbgArr = ['166deg, rgba(69,255,0,1) 30%', 'rgba(42,137,208,1) 63%'];

// let rgb = `linear-gradient(${rbgArr})`;

// document.querySelector('.container').style.background = rgb;


// console.log(rgb)

//////////////////////////////////////////////////////////////////////////













const procentScroll = document.querySelector('.procent_scroll_control');
const procentScrollControlButton = document.getElementById('procent_scroll_control_button_1');
const procentScrollText = document.getElementById('procent_scroll_text_1')
const procentScrollControlButtons = document.querySelectorAll('.procent_scroll_control_button')



// procentScroll.addEventListener('mousedown', (event) => changeProcentScroll(event))

procentScrollControlButtons.forEach(item => {
    item.addEventListener('mousedown',() => scrollProcentPanel(item));
})

// procentScrollControlButton.addEventListener('mousedown', scrollProcentPanel);



function scrollProcentPanel(item) {
    item.addEventListener('mousemove', event => {
        if (event.which === 1) {
            let mouseСoordinatesProcentPanel = event.clientX - procentScroll.offsetLeft;
            if (mouseСoordinatesProcentPanel >= 0 && mouseСoordinatesProcentPanel <= procentScroll.offsetWidth) {
                // console.log(mouseСoordinatesProcentPanel)
                // console.log(procentScroll.offsetWidth)
                changeProcentScroll(event, item)
            }
        }
    })
}

function changeProcentScroll(event, item) {
    let mouseСoordinatesProcentPanel = event.clientX - procentScroll.offsetLeft;
    item.style.left = `${mouseСoordinatesProcentPanel - (procentScrollControlButton.offsetWidth / 2)}px`;
    // procentScrollText.style.left = `${mouseСoordinatesProcentPanel - (procentScrollControlButton.offsetWidth / 2) - (procentScrollText.offsetWidth / 2 - procentScrollControlButton.offsetWidth / 2)}px`;
    // let transparency = (+procentScrollControlButton.style.left.split('').filter(item => !isNaN(+item) || item === '.').join('')).toFixed(0);
    // // console.log(transparency);
    // procentScrollText.value = (transparency * 100 / procentScroll.offsetWidth).toFixed(0)

}