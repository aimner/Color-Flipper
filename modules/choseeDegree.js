const degreeControlCircle = document.querySelector('.degree_control_circle');
const degreePanelText = document.querySelector('.degree_panel_text');


function chooseDegree(event) {
    let mouseCorrdinatX = event.clientX - degreeCircle.offsetLeft;
    let mouseCorrdinatY = event.clientY - degreeCircle.offsetTop;
    if (mouseCorrdinatX <= degreeCircle.offsetWidth / 2 && mouseCorrdinatY <= degreeCircle.offsetHeight / 2) {
        // console.log(4)
        degreeControlCircle.style.transform = `rotate(${mouseCorrdinatX * 90 / (degreeCircle.offsetWidth / 2) + 270}deg)`;
        degreePanelText.value = degreeControlCircle.style.transform.split('').filter(item => !isNaN(+item) || item === '.').join('');
    }
    if (mouseCorrdinatX <= degreeCircle.offsetWidth && mouseCorrdinatX >= degreeCircle.offsetWidth / 2 && mouseCorrdinatY <= degreeCircle.offsetHeight && mouseCorrdinatY >= degreeCircle.offsetHeight / 2) {
        // console.log(2)
        degreeControlCircle.style.transform = `rotate(${(mouseCorrdinatY - degreeCircle.offsetHeight / 2) * 90 / (degreeCircle.offsetHeight / 2) + 90}deg)`
        degreePanelText.value = degreeControlCircle.style.transform.split('').filter(item => !isNaN(+item) || item === '.').join('');
    }
    if (mouseCorrdinatX <= degreeCircle.offsetWidth && mouseCorrdinatX >= degreeCircle.offsetWidth / 2 && mouseCorrdinatY <= degreeCircle.offsetHeight / 2) {
        // console.log(1)
        degreeControlCircle.style.transform = `rotate(${mouseCorrdinatY * 90 / (degreeCircle.offsetHeight / 2)}deg)`
        degreePanelText.value = degreeControlCircle.style.transform.split('').filter(item => !isNaN(+item) || item === '.').join('');
    }
    if (mouseCorrdinatX <= degreeCircle.offsetWidth / 2 && mouseCorrdinatY >= degreeCircle.offsetHeight / 2 && mouseCorrdinatY <= degreeCircle.offsetHeight) {
        // console.log(3)
        degreeControlCircle.style.transform = `rotate(${(degreeCircle.offsetWidth / 2 - mouseCorrdinatX) * 90 / (degreeCircle.offsetWidth / 2) + 180}deg)`
        degreePanelText.value = degreeControlCircle.style.transform.split('').filter(item => !isNaN(+item) || item === '.').join('');
    }
}


