
const transparencyScrollControlButton = document.querySelector('.transparency_scroll_control_button')

function scrollTransparencyPanel() {
    transparencyScroll.addEventListener('mousemove', event => {
        if (event.which === 1) {
            let mouseСoordinatesTransparencyPanel = event.clientX - transparencyScroll.offsetLeft;
            if (mouseСoordinatesTransparencyPanel > 0 && mouseСoordinatesTransparencyPanel <= transparencyScroll.offsetWidth) {
                changeTransparencyScroll(event)
            }
        }
    })
}

function changeTransparencyScroll(event) {
    let mouseСoordinatesColorPanel = event.clientX - transparencyScroll.offsetLeft;
    transparencyScrollControlButton.style.left = `${mouseСoordinatesColorPanel - (transparencyScrollControlButton.offsetWidth / 2)}px`;
    let transparency =  (+transparencyScrollControlButton.style.left.split('').filter(item => !isNaN(+item) || item === '.').join('') / transparencyScroll.offsetWidth).toFixed(2);
    let globalButtonsArrItem = globalButtonsArr.find(item => item.active === true);
    globalButtonsArrItem.transparency = transparency;
    colorTitle.style.background = globalButtonsArrItem.color();
}


