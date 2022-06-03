import gaps from "./gaps.js"
import chooseFunction from "./chooseClass.js"

const colorScroll = document.querySelector('.color_scroll')
const colorPanel = document.querySelector('.color_panel')
const colorScrollControlButton = document.querySelector('.color_scroll_control_button')
const colorPanelButton = document.querySelector('.color_panel_button')
const colorTitle = document.querySelector('.color_title')
let controlPointGaps = 1;
let rgb = 0;
let rgbNumber = 0;


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
    colorScrollControlButton.style.left = `${mouseСoordinatesColorPanel - (colorScrollControlButton.offsetWidth / 2)}px`

    for (let i = 1; i <= 6; i++) {
        if (mouseСoordinatesColorPanel <= gaps[i] && mouseСoordinatesColorPanel >= gaps[i - 1]) {
            rgbNumber = Math.floor((mouseСoordinatesColorPanel - (colorScroll.offsetWidth / 6) * gaps.indexOf(gaps[i - 1])) * 255 / (colorScroll.offsetWidth / 6));
            controlPointGaps = gaps.indexOf(gaps[i])
            console.log(gaps.indexOf(gaps[i]))
            switch (gaps.indexOf(gaps[i])) {
                case 1:
                    colorPanel.style.background = `rgb(255, ${rgbNumber}, 0)`;

                    break;
                case 2:
                    colorPanel.style.background = `rgb(${255 - rgbNumber}, 255, 0)`;
                    break;
                case 3:
                    colorPanel.style.background = `rgb(0, 255, ${rgbNumber})`;
                    break;
                case 4:
                    colorPanel.style.background = `rgb(0, ${255 - rgbNumber}, 255)`;
                    break;
                case 5:
                    colorPanel.style.background = `rgb(${rgbNumber}, 0, 255)`;
                    break;
                case 6:
                    colorPanel.style.background = `rgb(255, 0, ${255 - rgbNumber})`;
                    break;
                default:
                    break;
            }
            break
        }
    }
}


function chooseColorClick(event) {
    let mouseCoordX = event.clientX - colorPanel.offsetLeft;
    let mouseCoordY = event.clientY - colorPanel.offsetTop;
    colorPanelButton.style.left = `${mouseCoordX - colorPanelButton.offsetWidth / 2}px`;
    colorPanelButton.style.top = `${mouseCoordY - colorPanelButton.offsetWidth / 2}px`;
}

colorPanel.addEventListener('mousedown', (event) => chooseColorClick(event))

colorPanel.addEventListener('mousedown', chooseColorMove)

function chooseColorMove() {


    colorPanel.addEventListener('mousemove', event => {
        event.preventDefault()

        if (event.which === 1) {

            let mouseCoordX = event.clientX - colorPanel.offsetLeft;
            let mouseCoordY = event.clientY - colorPanel.offsetTop;

            if (mouseCoordX > 0 && mouseCoordX <= colorPanel.offsetWidth && mouseCoordY > 0 && mouseCoordY <= colorPanel.offsetHeight) {
                colorPanelButton.style.left = `${mouseCoordX - colorPanelButton.offsetWidth / 2}px`;
                colorPanelButton.style.top = `${mouseCoordY - colorPanelButton.offsetWidth / 2}px`;
                switch (controlPointGaps) {
                    case 1:
                        chooseFunction.choose1(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle)
                        break;
                    case 2:
                        chooseFunction.choose2(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle)
                        break;
                    case 3:
                        chooseFunction.choose3(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle)
                        break;
                    case 4:
                        chooseFunction.choose4(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle)
                        break;
                    case 5:
                        chooseFunction.choose5(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle)
                        break;
                    case 6:
                        chooseFunction.choose6(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle)
                        break;
                    default:
                        break;
                }

            }
        }
    })
}


export { scrollColorPanel, changeColorScroll }