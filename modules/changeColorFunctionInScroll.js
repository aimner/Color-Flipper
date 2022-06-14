
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
                    chooseFunctions.choose1(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    chooseFunctions2.choose1(colorPanel, globalButtonsArr[0].coordinats1, globalButtonsArr[0].coordinats3)
                    break;
                case 2:
                    colorPanel.style.background = `rgb(${255 - rgbNumber}, 255, 0)`;
                    chooseFunctions.choose2(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    chooseFunctions2.choose2(colorPanel, globalButtonsArr[0].coordinats2, globalButtonsArr[0].coordinats3)
                    break;
                case 3:
                    colorPanel.style.background = `rgb(0, 255, ${rgbNumber})`;
                    chooseFunctions.choose3(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    chooseFunctions2.choose3(colorPanel, globalButtonsArr[0].coordinats1, globalButtonsArr[0].coordinats2)
                    break;
                case 4:
                    colorPanel.style.background = `rgb(0, ${255 - rgbNumber}, 255)`;
                    chooseFunctions.choose4(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    chooseFunctions2.choose4(colorPanel, globalButtonsArr[0].coordinats1, globalButtonsArr[0].coordinats3)
                    break;
                case 5:
                    colorPanel.style.background = `rgb(${rgbNumber}, 0, 255)`;
                    chooseFunctions.choose5(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    chooseFunctions2.choose5(colorPanel, globalButtonsArr[0].coordinats2, globalButtonsArr[0].coordinats3)
                    break;
                case 6:
                    colorPanel.style.background = `rgb(255, 0, ${255 - rgbNumber})`;
                    chooseFunctions.choose6(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                    chooseFunctions2.choose6(colorPanel, globalButtonsArr[0].coordinats1, globalButtonsArr[0].coordinats2)
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


function chooseColorMove() {
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

                switch (controlPointGaps) {
                    case 1:
                        chooseFunctions.choose1(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 2:
                        chooseFunctions.choose2(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 3:
                        chooseFunctions.choose3(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 4:
                        chooseFunctions.choose4(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 5:
                        chooseFunctions.choose5(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    case 6:
                        chooseFunctions.choose6(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                        break;
                    default:
                        break;
                }

            }
        }
    })
}


