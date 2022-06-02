import gaps from "./gaps.js"

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
            // console.log(gaps.indexOf(gaps[i]))
            // rgb = rgbNumber
            controlPointGaps = gaps.indexOf(gaps[i])
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
            // console.log(controlPointGaps)
            // console.log(colorPanel.style.background)

            let mouseCoordX = event.clientX - colorPanel.offsetLeft;
            let mouseCoordY = event.clientY - colorPanel.offsetTop;

            if (mouseCoordX > 0 && mouseCoordX <= colorPanel.offsetWidth && mouseCoordY > 0 && mouseCoordY <= colorPanel.offsetHeight) {
                colorPanelButton.style.left = `${mouseCoordX - colorPanelButton.offsetWidth / 2}px`;
                colorPanelButton.style.top = `${mouseCoordY - colorPanelButton.offsetWidth / 2}px`;
                switch (controlPointGaps) {
                    case 1:
                        function choose1() {
                            rgb = rgbNumber
                            console.log(rgb)
                            let coordinast1 = 255 - (mouseCoordY * 255 / colorPanel.offsetHeight);
                            let coordinast2X = 255 - (mouseCoordX * (255 - rgb) / colorPanel.offsetWidth);
                            let coordinast2Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast2X / colorPanel.offsetHeight;
                            let coordinast3X = 255 - (mouseCoordX * 255 / (colorPanel.offsetWidth));
                            let coordinast3Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast3X / colorPanel.offsetHeight;

                            // console.log(Math.floor(coordinast1))
                            // console.log(Math.floor(coordinast2Y))
                            // console.log(Math.floor(coordinast3Y))
                            colorTitle.style.background = `rgb(${coordinast1}, ${coordinast2Y}, ${coordinast3Y})`;
                        }
                        choose1()
                        break;
                    case 2:
                        function choose2() {
                            
                            rgb = 255 - rgbNumber
                            console.log(rgb)
                            console.log(mouseCoordX)
                            let coordinast2 = 255 - (mouseCoordY * 255 / colorPanel.offsetHeight);
                            let coordinast1X = rgb - ((mouseCoordX * rgb) / colorPanel.offsetWidth);
                            let coordinast1Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast1X / colorPanel.offsetHeight;
                            let coordinast3X = 255 - (mouseCoordX * 255 / (colorPanel.offsetWidth));
                            let coordinast3Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast3X / colorPanel.offsetHeight;
    
                            // console.log(Math.floor(coordinast1))
                            // console.log(Math.floor(coordinast2Y))
                            // console.log(Math.floor(coordinast3Y))
                            colorTitle.style.background = `rgb(${coordinast1Y}, ${coordinast2}, ${coordinast3Y})`;
                        }
                        choose2()
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

            }
        }
    })
}


console.log(colorPanel.offsetWidth)
console.log(colorPanel.offsetHeight)

export { scrollColorPanel, changeColorScroll }