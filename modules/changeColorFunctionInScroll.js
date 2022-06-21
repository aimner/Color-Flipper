
const colorScrollControlButton = document.querySelector('.color_scroll_control_button')
const colorPanelButton = document.querySelector('.color_panel_button')
const colorTitle = document.querySelector('.color_title')
const transparencyScrollRgb = document.querySelector('.transparency_scroll_rgb')
let controlPointGaps = 1;
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
    let colorPanelButtonCoordinatsX = parseInt(colorPanelButton.style.left) + colorPanelButton.offsetWidth / 2;
    let colorPanelButtonCoordinatsY = parseInt(colorPanelButton.style.top) + colorPanelButton.offsetHeight / 2;
    colorScrollControlButton.style.left = `${mouseСoordinatesColorPanel - (colorScrollControlButton.offsetWidth / 2)}px`;



    for (let i = 1; i <= 6; i++) {
        if (mouseСoordinatesColorPanel <= gaps[i] && mouseСoordinatesColorPanel >= gaps[i - 1]) {
            rgbNumber = Math.floor((mouseСoordinatesColorPanel - (colorScroll.offsetWidth / 6) * gaps.indexOf(gaps[i - 1])) * 255 / (colorScroll.offsetWidth / 6));
            controlPointGaps = gaps.indexOf(gaps[i])
            console.log(gaps.indexOf(gaps[i]))
            
            switch (controlPointGaps) {
                case 1:
                    colorPanel.style.background = `rgb(255, ${rgbNumber}, 0)`;
                    changeGlobalButtonsArrItem()
                    chooseFunctions.choose1(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    break;
                case 2:
                    colorPanel.style.background = `rgb(${255 - rgbNumber}, 255, 0)`;
                    changeGlobalButtonsArrItem()
                    chooseFunctions.choose2(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    break;
                case 3:
                    colorPanel.style.background = `rgb(0, 255, ${rgbNumber})`;
                    changeGlobalButtonsArrItem()
                    chooseFunctions.choose3(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    break;
                case 4:
                    colorPanel.style.background = `rgb(0, ${255 - rgbNumber}, 255)`;
                    changeGlobalButtonsArrItem()
                    chooseFunctions.choose4(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    break;
                case 5:
                    colorPanel.style.background = `rgb(${rgbNumber}, 0, 255)`;
                    changeGlobalButtonsArrItem()
                    chooseFunctions.choose5(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    break;
                case 6:
                    colorPanel.style.background = `rgb(255, 0, ${255 - rgbNumber})`;
                    changeGlobalButtonsArrItem()
                    chooseFunctions.choose6(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    break;
                default:
                    break;
            }
            break
        }
    }
}

function changeGlobalButtonsArrItem() {
    let globalButtonsArrItem = globalButtonsArr.find(item => item.active === true);
    globalButtonsArrItem.colorPanelBackgroundColor = colorPanel.style.background;
    globalButtonsArrItem.controlPointGaps = controlPointGaps
    globalButtonsArrItem.colorScrollButtonCoordinats = (+colorScrollControlButton.style.left.split('').filter(item => !isNaN(+item) || item === '.').join('')).toFixed(1);
    globalButtonsArrItem.rgbNumber = rgbNumber
}



function chooseColorClick(event) {
    let mouseCoordX = event.clientX - colorPanel.offsetLeft;
    let mouseCoordY = event.clientY - colorPanel.offsetTop;
    colorPanelButton.style.left = `${mouseCoordX - colorPanelButton.offsetWidth / 2}px`;
    colorPanelButton.style.top = `${mouseCoordY - colorPanelButton.offsetWidth / 2}px`;
}


function chooseColorMove() { // свайп круглой кнопки для выбора цвета
    colorPanel.addEventListener('mousemove', event => {
        event.preventDefault()

        if (event.which === 1) {

            let mouseCoordX = event.clientX - colorPanel.offsetLeft;
            let mouseCoordY = event.clientY - colorPanel.offsetTop;
            let colorPanelButtonCoordinatsX = parseInt(colorPanelButton.style.left) + colorPanelButton.offsetWidth / 2;
            let colorPanelButtonCoordinatsY = parseInt(colorPanelButton.style.top) + colorPanelButton.offsetHeight / 2;

            if (mouseCoordX > 0 && mouseCoordX <= colorPanel.offsetWidth && mouseCoordY > 0 && mouseCoordY <= colorPanel.offsetHeight) {
                colorPanelButton.style.left = `${mouseCoordX - colorPanelButton.offsetWidth / 2}px`;
                colorPanelButton.style.top = `${mouseCoordY - colorPanelButton.offsetWidth / 2}px`;
                let globalButtonsArrItem = globalButtonsArr.find(item => item.active === true);
             
              
                switch (globalButtonsArrItem.controlPointGaps) {
                    case 1:
                        console.log('1')
                        chooseFunctions.choose1(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 2:
                        console.log('2')
                        chooseFunctions.choose2(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 3:
                        console.log('3')
                        chooseFunctions.choose3(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 4:
                        console.log('4')
                        chooseFunctions.choose4(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 5:
                        console.log('5')
                        chooseFunctions.choose5(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 6:
                        console.log('6')
                        chooseFunctions.choose6(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    default:
                        break;
                }

            }
        }
    })
}


