const container = document.querySelector('.container')
const changeColor = document.querySelector('.change_color')
const colorTitle = document.querySelector('.color_title')
const colorScroll = document.querySelector('.color_scroll')
const colorBlock = document.querySelector('.color_panel')
const colorPanelControlButton = document.querySelector('.control_button')
let gaps = []



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


function createGapsArr() {
    for (let i = 0; i <= 6; i++) {
        if (i === 0) {
            gaps.unshift(i)
        } else {
            gaps.push(colorScroll.offsetWidth / 6 * i)
        }
    }
}
createGapsArr()

colorScroll.addEventListener('mousedown', (event) => {
    changeColorScroll(event)
})

colorScroll.addEventListener('mousedown', scrollColorPanel)


function scrollColorPanel() {
    colorScroll.addEventListener('mousemove', event => {
        if (event.which === 1) {
            let mouseСoordinatesColorPanel = event.clientX - colorScroll.offsetLeft;
            if (mouseСoordinatesColorPanel > 0 && mouseСoordinatesColorPanel <= colorScroll.offsetWidth) {
                changeColorScroll(event)
            }
        }
    })
}

function changeColorScroll(event) {
    let mouseСoordinatesColorPanel = event.clientX - colorScroll.offsetLeft;
    colorPanelControlButton.style.left = `${mouseСoordinatesColorPanel - (colorPanelControlButton.offsetWidth / 2)}px`

    for (let i = 1; i <= 6; i++) {
        if (mouseСoordinatesColorPanel <= gaps[i] && mouseСoordinatesColorPanel >= gaps[i - 1]) {
            let rgbNumber = Math.floor((mouseСoordinatesColorPanel - (colorScroll.offsetWidth / 6) * gaps.indexOf(gaps[i - 1])) * 255 / (colorScroll.offsetWidth / 6));
            switch (gaps.indexOf(gaps[i])) {
                case 1:
                    colorBlock.style.background = `rgb(255, ${rgbNumber}, 0)`;
                    break;
                case 2:
                    colorBlock.style.background = `rgb(${255 - rgbNumber}, 255, 0)`;
                    break;
                case 3:
                    colorBlock.style.background = `rgb(0, 255, ${rgbNumber})`;
                    break;
                case 4:
                    colorBlock.style.background = `rgb(0, ${255 - rgbNumber}, 255)`;
                    break;
                case 5:
                    colorBlock.style.background = `rgb(${rgbNumber}, 0, 255)`;
                    break;
                case 6:
                    colorBlock.style.background = `rgb(255, 0, ${255 - rgbNumber})`;
                    break;
                default:
                    break;
            }
            break
        }
    }
}
