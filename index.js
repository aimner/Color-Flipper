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
            buttonsArr.forEach(item => item.classList.remove('procent_scroll_control_button_active'));
           
            scrollProcentPanel(item, inputsArr)
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
    
    let elem = buttonClass();
    globalButtonsArr.push(new elem(procentScrollInputsArr.length))
    console.log(globalButtonsArr);
})


function buttonClass() {
   return class {
        constructor(dataNumber, procent, coordinats1, coordinats2, coordinats3, transparency) {
            this.dataNumber = dataNumber
            this.procent = procent
            this.coordinats1 = coordinats1
            this.coordinats2 = coordinats2
            this.coordinats3 = coordinats3
            this.transparency = transparency
        }
        color() {
            return `rgb(${this.coordinats1}, ${this.coordinats2}, ${this.coordinats3}, ${this.transparency}) ${this.procent}`
        }
    }
}

let globalButtonsArr = []

for(let i = 1; i <= procentScrollInputsArr.length; i++) {
    let elem = buttonClass()
    if(i === 1) {
        globalButtonsArr.push(new elem(i, 0, 255, 113, 113, 1))
    } else {
        globalButtonsArr.push(new elem(i, 0, 159, 8, 8, 1))
    }
    
}


// console.log(globalButtonsArr.reduce((firstItem, item) => firstItem + item))

// chooseFunctions2.choose1(colorPanel, globalButtonsArr[0].coordinats1, globalButtonsArr[0].coordinats3)
// chooseFunctions2.choose2(colorPanel, globalButtonsArr[0].coordinats2, globalButtonsArr[0].coordinats3)
// chooseFunctions2.choose3(colorPanel, globalButtonsArr[0].coordinats1, globalButtonsArr[0].coordinats2)





