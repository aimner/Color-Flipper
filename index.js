import {scrollColorPanel, changeColorScroll} from "./modules/changeColorFunctionInScroll.js"
// import sr from "./modules/chooseColor.js"

const container = document.querySelector('.container')
const changeColor = document.querySelector('.change_color')
const colorTitle = document.querySelector('.color_title')
const colorScroll = document.querySelector('.color_scroll')



changeColor.addEventListener('click', () => {
    let firstNumber1 = Math.floor(Math.random() * 250)
    let secondNumber1 = Math.floor(Math.random() * 250)
    let thirdNumber1 = Math.floor(Math.random() * 250)
    let firstNumber2 = Math.floor(Math.random() * 250)
    let secondNumber2 = Math.floor(Math.random() * 250)
    let thirdNumber2 = Math.floor(Math.random() * 250)
    let firstNumber3 = Math.floor(Math.random() * 250)
    let secondNumber3 = Math.floor(Math.random() * 250)
    let thirdNumber3 = Math.floor(Math.random() * 250)
    let firstProcent = Math.floor(Math.random() * 100)
    let secondProcent = Math.floor(Math.random() * 100)
    let thirdProcent = Math.floor(Math.random() * 100)
    let degree = Math.floor(Math.random() * 360)
    container.style.background = `linear-gradient(${degree}deg, rgba(${firstNumber1},${secondNumber1},${thirdNumber1}) ${firstProcent}%, rgba(${firstNumber2},${secondNumber2},${thirdNumber2}) ${secondProcent}%,
    rgba(${firstNumber3},${secondNumber3},${thirdNumber3}) ${thirdProcent}%)`
    colorTitle.textContent = `linear-gradient (${degree}deg, rgba(${firstNumber1},${secondNumber1},${thirdNumber1}) ${firstProcent}%, rgba(${firstNumber2},${secondNumber2},${thirdNumber2}) ${secondProcent}%,
    rgba(${firstNumber3},${secondNumber3},${thirdNumber3}) ${thirdProcent}%)`
})

colorScroll.addEventListener('mousedown', (event) => {
    changeColorScroll(event)
})

colorScroll.addEventListener('mousedown', scrollColorPanel)




// function chooseColorClick(event) {
//     let mouseCoordX = event.clientX - colorPanel.offsetLeft;
//     let mouseCoordY = event.clientY - colorPanel.offsetTop;
//     colorPanelButton.style.left = `${mouseCoordX - colorPanelButton.offsetWidth / 2}px`;
//     colorPanelButton.style.top = `${mouseCoordY  - colorPanelButton.offsetWidth / 2}px`;
//     console.log(mouseCoordX, mouseCoordY)
    
    
// }

// colorPanel.addEventListener('mousedown', (event) => chooseColorClick(event))

// colorPanel.addEventListener('mousedown', chooseColorMove)

// function chooseColorMove() {
//     // console.log(controlPointGaps)
//     // controlPointGaps = null
//     colorPanel.addEventListener('click', event => {

//         if (event.which === 1) {
//             let mouseCoordX = event.clientX - colorPanel.offsetLeft;
//             let mouseCoordY = event.clientY - colorPanel.offsetTop;
//             if (mouseCoordX > 0 && mouseCoordX <= colorPanel.offsetWidth) {
//                 colorPanelButton.style.left = `${mouseCoordX - colorPanelButton.offsetWidth / 2}px`;
//                 colorPanelButton.style.top = `${mouseCoordY  - colorPanelButton.offsetWidth / 2}px`;
//             }
//         }
//     })
// }


