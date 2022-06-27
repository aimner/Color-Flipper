const procentScrollControlButton = document.getElementById('procent_scroll_control_button_1');





function scrollProcentPanel(item, inputsArr) {
    item.classList.add('procent_scroll_control_button_active')
    globalButtonsArr.forEach(elem => {
        elem.active = false;
        if (elem.dataNumber == item.dataset.number) {
            elem.active = true;
            chooseFunctionToChangeButtonsElement (elem)     
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


function chooseFunctionToChangeButtonsElement (elem) {
    switch (elem.controlPointGaps) {
        case 1:
            chooseFunctions2.choose1(colorPanel, elem)
            console.log('1')
            break;
        case 2:
            chooseFunctions2.choose2(colorPanel, elem)
            console.log('2')
            break;
        case 3:
            chooseFunctions2.choose3(colorPanel, elem)
            console.log('3')
            break;
        case 4:
            chooseFunctions2.choose4(colorPanel, elem)
            console.log('4')
            break;
        case 5:
            chooseFunctions2.choose5(colorPanel, elem)
            console.log('5')
            break;
        case 6:
            chooseFunctions2.choose6(colorPanel, elem)
            console.log('6')
            break;
        default:
            break;
    }
}

function changeProcentScroll(event, item, inputsArr) {
    let mouseСoordinatesProcentPanel = event.clientX - procentScroll.offsetLeft;
    item.style.left = `${mouseСoordinatesProcentPanel - (procentScrollControlButton.offsetWidth / 2)}px`;
    inputsArr.forEach(input => {
        if (item.dataset.number === input.dataset.number) {
            input.style.left = `${mouseСoordinatesProcentPanel - (item.offsetWidth / 2) - (procentScrollText.offsetWidth / 2 - item.offsetWidth / 2)}px`;
            let transparency = (+item.style.left.split('').filter(item => !isNaN(+item) || item === '.').join('')).toFixed(0);
            input.value = (transparency * 100 / procentScroll.offsetWidth).toFixed(0);
            let elem = globalButtonsArr.find(item => item.active === true);
            elem.procent = input.value;
            colorTitle.style.background = elem.color();
            procentScroll.style.background = elem.colorProcentScroll();
        }
    })
}




function changeButtonsElement(event) {
    if(event.target.classList.contains('colors_block_choose_button')) {
        procentScrollButtonsArr.forEach(item => item.classList.remove('procent_scroll_control_button_active'));
        procentScrollButtonsArr.find(item => item.dataset.number === event.target.dataset.number).classList.add('procent_scroll_control_button_active');
        globalButtonsArr.forEach(item => {
            item.active = false
            if(item.dataNumber === +event.target.dataset.number) {
                item.active = true
                chooseFunctionToChangeButtonsElement(item)
            }
        });
       }

    if(event.target.classList.contains('colors_block_delete_button')) {
       
       let deleteButtonControl = procentScrollButtonsArr.find(item => item.dataset.number === event.target.dataset.number);
       deleteButtonControl.remove();
       procentScrollButtonsArr.splice(procentScrollButtonsArr.indexOf(deleteButtonControl), procentScrollButtonsArr.indexOf(deleteButtonControl))

       let deleteInput = procentScrollInputsArr.find(item => item.dataset.number === event.target.dataset.number);
       deleteInput.remove()
       procentScrollInputsArr.splice(procentScrollInputsArr.indexOf(deleteInput), procentScrollInputsArr.indexOf(deleteInput))

       let deleteChooseColorButton = globalButtonsArr.indexOf(globalButtonsArr.find(item => item.dataNumber === +event.target.dataset.number));
       globalButtonsArr.splice(deleteChooseColorButton, deleteChooseColorButton)

       let delete1 = colorsBlockChooseButtonsArr.find(item => item.dataset.number === event.target.dataset.number);
       colorsBlockChooseButtonsArr.splice(colorsBlockChooseButtonsArr.indexOf(delete1), colorsBlockChooseButtonsArr.indexOf(delete1))
    

       let delete2 = colorsBlockDeleteButtonsArr.find(item => item.dataset.number === event.target.dataset.number);
       colorsBlockDeleteButtonsArr.splice(colorsBlockDeleteButtonsArr.indexOf(delete2), colorsBlockDeleteButtonsArr.indexOf(delete2))

       event.target.parentElement.remove()

       colorTitle.style.background = globalButtonsArr[0].color();

       console.log(globalButtonsArr)
       console.log(procentScrollButtonsArr)
       console.log(procentScrollInputsArr)
       console.log(colorsBlockChooseButtonsArr)
       console.log(colorsBlockDeleteButtonsArr)
   
       
    }
}

function createControlProcentButton(event) {
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
    
    createControlProcentInput(newButton, mouseСoordinatesProcentPanel);

}


function createControlProcentInput (newButton, mouseСoordinatesProcentPanel) {
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
    createButtonToChooseColor()
    let Elem = buttonClass();
    globalButtonsArr.push(new Elem(procentScrollInputsArr.length, +newInput.value, 255, 255, 255, 1, 0))
}

function createButtonToChooseColor() {
    let newChooseBlock = document.createElement('div');
    newChooseBlock.classList.add('colors_block_element');
    colorsBlock.append(newChooseBlock);
    let newChooseButton = document.createElement('button');
    newChooseButton.classList.add('colors_block_choose_button')
    colorsBlockChooseButtonsArr.push(newChooseButton)
    newChooseButton.setAttribute('data-number', `${colorsBlockChooseButtonsArr.length}`)
    newChooseButton.textContent = `Choose ${colorsBlockChooseButtonsArr.length} Сolor`
    newChooseBlock.append(newChooseButton)

    let newDeleteButton = document.createElement('button')
    newDeleteButton.classList.add('colors_block_delete_button')
    colorsBlockDeleteButtonsArr.push(newDeleteButton)
    newDeleteButton.setAttribute('data-number', `${colorsBlockDeleteButtonsArr.length}`)
    newDeleteButton.textContent = `Delete ${colorsBlockChooseButtonsArr.length} Сolor`
    newChooseBlock.append(newDeleteButton)

    let newColorExamle = document.createElement('div');
    newColorExamle.classList.add('colors_example');
    newChooseBlock.prepend(newColorExamle);
    colorsExampleArr.push(newColorExamle);
    newColorExamle.setAttribute('data-number', `${colorsExampleArr.length}`)
}

