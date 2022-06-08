const procentScroll = document.querySelector('.procent_scroll_control');
const procentScrollControlButton = document.getElementById('procent_scroll_control_button_1');
const procentScrollText = document.getElementById('procent_scroll_text_1');
const procentScrollControlButtons = document.querySelectorAll('.procent_scroll_control_button');
const procentScrollTextInputs = document.querySelectorAll('.procent_scroll_text')
const procentScrollButtonsArr = [...procentScrollControlButtons];
const procentScrollInputsArr = [...procentScrollTextInputs];
const procentScrollBlockText = document.querySelector('.procent_scroll_block_text');



function scrollProcentPanel(item, inputsArr) {
    item.classList.add('procent_scroll_control_button_active')
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
        if(item.dataset.number === input.dataset.number) {
            input.style.left = `${mouseСoordinatesProcentPanel - (item.offsetWidth / 2) - (procentScrollText.offsetWidth / 2 - item.offsetWidth / 2)}px`;
            let transparency = (+item.style.left.split('').filter(item => !isNaN(+item) || item === '.').join('')).toFixed(0);
            input.value = (transparency * 100 / procentScroll.offsetWidth).toFixed(0)
        }
    })
}
/////////////////////

// function addEventForProcentScrollButton(buttonsArr, inputsArr) {
//     buttonsArr.forEach(item => {
//         item.addEventListener('mousedown', (event) => {
//             scrollProcentPanel(item, inputsArr)
//         });
//         window.addEventListener('mouseup', (event) => {
//             item.classList.remove('procent_scroll_control_button_active')
//         });
//         item.addEventListener('click', (event) => {
//             event.stopPropagation()
//         });
//     })
// }

// addEventForProcentScrollButton(procentScrollControlButtons, procentScrollTextInputs)


// procentScroll.addEventListener('click', (event) => {
//     let newButton = document.createElement('div');
//     procentScrollButtonsArr.push(newButton);
//     newButton.classList.add('procent_scroll_control_button');
//     newButton.id = `procent_scroll_control_button_${procentScrollButtonsArr.length}`;
//     newButton.setAttribute('data-number', `${procentScrollButtonsArr.length}`);
//     newButton.textContent = procentScrollButtonsArr.length;
//     let mouseСoordinatesProcentPanel = event.clientX - procentScroll.offsetLeft;
//     newButton.style.left = `${mouseСoordinatesProcentPanel - (newButton.offsetWidth / 2)}px`;
//     procentScroll.append(newButton);

//     let newInput = document.createElement('input');
//     procentScrollInputsArr.push(newInput);
//     newInput.classList.add('procent_scroll_text');
//     newInput.id = `procent_scroll_text_${procentScrollButtonsArr.length}`;
//     newInput.setAttribute('data-number', `${procentScrollInputsArr.length}`);
//     procentScrollBlockText.append(newInput);
//     addEventForProcentScrollButton(procentScrollButtonsArr, procentScrollInputsArr);
// })


export default scrollProcentPanel;