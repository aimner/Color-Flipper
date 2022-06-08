import { scrollColorPanel, changeColorScroll, chooseColorClick, chooseColorMove } from "./modules/changeColorFunctionInScroll.js";
import { scrollTransparencyPanel, changeTransparencyScroll } from "./modules/changeTransparency.js";
import chooseDegree from "./modules/choseeDegree.js";
import scrollProcentPanel from "./modules/changeProcentFunctionScroll.js";

const colorScroll = document.querySelector('.color_scroll');
const colorPanel = document.querySelector('.color_panel');
const degreeCircle = document.querySelector('.degree_circle');
const transparencyScroll = document.querySelector('.transparency_scroll');
const procentScrollControlButtons = document.querySelectorAll('.procent_scroll_control_button');
const procentScrollTextInputs = document.querySelectorAll('.procent_scroll_text')
const procentScrollButtonsArr = [...procentScrollControlButtons];
const procentScrollInputsArr = [...procentScrollTextInputs];
const procentScrollBlockText = document.querySelector('.procent_scroll_block_text');
const procentScroll = document.querySelector('.procent_scroll_control');
const procentScrollText = document.getElementById('procent_scroll_text_1');




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



function addEventForProcentScrollButtons(buttonsArr, inputsArr) {
    buttonsArr.forEach(item => {
        item.addEventListener('mousedown', (event) => {
            scrollProcentPanel(item, inputsArr)
        });
        window.addEventListener('mouseup', (event) => {
            item.classList.remove('procent_scroll_control_button_active')
        });
        item.addEventListener('click', (event) => {
            event.stopPropagation()
        });
    })
}

addEventForProcentScrollButtons(procentScrollControlButtons, procentScrollTextInputs)


procentScroll.addEventListener('click', (event) => {
    let newButton = document.createElement('div');
    procentScrollButtonsArr.push(newButton);
    newButton.classList.add('procent_scroll_control_button');
    newButton.id = `procent_scroll_control_button_${procentScrollButtonsArr.length}`;
    newButton.setAttribute('data-number', `${procentScrollButtonsArr.length}`);
    newButton.textContent = procentScrollButtonsArr.length;
    procentScroll.append(newButton);
    let mouseСoordinatesProcentPanel = event.clientX - procentScroll.offsetLeft;
    newButton.style.left = `${mouseСoordinatesProcentPanel - newButton.offsetWidth / 2}px`;
    procentScroll.append(newButton);

    let newInput = document.createElement('input');
    procentScrollInputsArr.push(newInput);
    newInput.classList.add('procent_scroll_text');
    newInput.id = `procent_scroll_text_${procentScrollButtonsArr.length}`;
    newInput.setAttribute('data-number', `${procentScrollInputsArr.length}`);
    procentScrollBlockText.append(newInput);
    newInput.style.left = `${mouseСoordinatesProcentPanel - (newButton.offsetWidth / 2) - (procentScrollText.offsetWidth / 2 - newButton.offsetWidth / 2)}px`;
    let transparency = (+newInput.style.left.split('').filter(item => !isNaN(+item) || item === '.').join('')).toFixed(0);
    newInput.value = (transparency * 100 / procentScroll.offsetWidth).toFixed(0);

    addEventForProcentScrollButtons(procentScrollButtonsArr, procentScrollInputsArr);
})


































