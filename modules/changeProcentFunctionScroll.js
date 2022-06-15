const procentScrollControlButton = document.getElementById('procent_scroll_control_button_1');




function scrollProcentPanel(item, inputsArr) {
    item.classList.add('procent_scroll_control_button_active')
    globalButtonsArr.forEach(elem => {
        elem.active = false;
        if (elem.dataNumber == item.dataset.number) {
            elem.active = true;
          
                    switch (elem.controlPointGaps) {
                        case 1:
                            // colorPanel.style.background = `rgb(255, ${rgbNumber}, 0)`;
                            // chooseFunctions.choose1(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                            chooseFunctions2.choose1(colorPanel, elem)
                            console.log('1')

                            break;
                        case 2:
                            // colorPanel.style.background = `rgb(${255 - rgbNumber}, 255, 0)`;
                            // chooseFunctions.choose2(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                            chooseFunctions2.choose2(colorPanel, elem)
                            console.log('2')
                            break;
                        case 3:
                            // colorPanel.style.background = `rgb(0, 255, ${rgbNumber})`;
                            // chooseFunctions.choose3(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                            chooseFunctions2.choose3(colorPanel, elem)
                            console.log('3')
                            break;
                        case 4:
                            // colorPanel.style.background = `rgb(0, ${255 - rgbNumber}, 255)`;
                            // chooseFunctions.choose4(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                            chooseFunctions2.choose4(colorPanel, elem)
                            console.log('4')
                            break;
                        case 5:
                            // colorPanel.style.background = `rgb(${rgbNumber}, 0, 255)`;
                            // chooseFunctions.choose5(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                            chooseFunctions2.choose5(colorPanel, elem)
                            console.log('5')
                            break;
                        case 6:
                            // colorPanel.style.background = `rgb(255, 0, ${255 - rgbNumber})`;
                            // chooseFunctions.choose6(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb)
                            chooseFunctions2.choose6(colorPanel, elem)
                            console.log('6')
                            break;
                        default:
                            break;
                    }
                
            

        }
    })
    procentScroll.addEventListener('mousemove', event => {
        event.preventDefault()
        if (event.which === 1 && item.classList.contains('procent_scroll_control_button_active')) {
            let mouseСoordinatesProcentPanel = event.clientX - procentScroll.offsetLeft;
            if (mouseСoordinatesProcentPanel >= 0 && mouseСoordinatesProcentPanel <= procentScroll.offsetWidth) {
                changeProcentScroll(event, item, inputsArr)
            }
        }
    })
}

function changeProcentScroll(event, item, inputsArr) {
    let mouseСoordinatesProcentPanel = event.clientX - procentScroll.offsetLeft;
    item.style.left = `${mouseСoordinatesProcentPanel - (procentScrollControlButton.offsetWidth / 2)}px`;
    inputsArr.forEach(input => {
        if (item.dataset.number === input.dataset.number) {
            input.style.left = `${mouseСoordinatesProcentPanel - (item.offsetWidth / 2) - (procentScrollText.offsetWidth / 2 - item.offsetWidth / 2)}px`;
            let transparency = (+item.style.left.split('').filter(item => !isNaN(+item) || item === '.').join('')).toFixed(0);
            input.value = (transparency * 100 / procentScroll.offsetWidth).toFixed(0)
        }
    })
}


function changeButtonObject() {

}