const colorScroll = document.querySelector(".color_scroll");
const colorPanel = document.querySelector(".color_panel");
const degreeCircle = document.querySelector(".degree_circle");
const transparencyScroll = document.querySelector(".transparency_scroll");
const procentScrollButtonsArr = [...document.querySelectorAll(".procent_scroll_control_button")];
const procentScrollInputsArr = [...document.querySelectorAll(".procent_scroll_text")];
const procentScrollBlockText = document.querySelector(".procent_scroll_block_text");
const procentScroll = document.querySelector(".procent_scroll_control");
const procentScrollText = document.getElementById("procent_scroll_text_1");
const colorsBlock = document.querySelector(".colors_block");
const colorsBlockChooseButtonsArr = [...document.querySelectorAll(".colors_block_choose_button")];
const colorsBlockDeleteButtonsArr = [...document.querySelectorAll(".colors_block_delete_button")];
const colorsExampleArr = [...document.querySelectorAll(".colors_example")];
const globalButtonsArr = [];

colorScroll.addEventListener("mousedown", (event) => changeColorScroll(event));

colorScroll.addEventListener("mousedown", scrollColorPanel);

colorPanel.addEventListener("mousedown", (event) => chooseColorClick(event));

colorPanel.addEventListener("mousedown", chooseColorMove);

degreeCircle.addEventListener("mousemove", (event) => chooseDegree(event));

transparencyScroll.addEventListener("mousedown", (event) => changeTransparencyScroll(event));

transparencyScroll.addEventListener("mousedown", scrollTransparencyPanel);

colorsBlock.addEventListener("click", (event) => changeButtonsElement(event));

procentScroll.addEventListener("click", (event) => createControlProcentButton(event));



function buttonClass() {
  return class {
    constructor(
      dataNumber,
      procent,
      coordinats1,
      coordinats2,
      coordinats3,
      transparency,
      colorScrollButtonCoordinats
    ) {
      this.dataNumber = dataNumber;
      this.procent = procent;
      this.coordinats1 = coordinats1;
      this.coordinats2 = coordinats2;
      this.coordinats3 = coordinats3;
      this.transparency = transparency;
      this.colorScrollButtonCoordinats = colorScrollButtonCoordinats;
      this.colorPanelBackgroundColor = null;
      this.controlPointGaps = 1;
      this.active = false;
      this.rgbNumber = 0;
    }

    lastElement(elem) {
      return ` rgba(${elem.coordinats1.toFixed(0)}, ${elem.coordinats2.toFixed(
        0
      )}, ${elem.coordinats3.toFixed(0)}, ${elem.transparency}) ${elem.procent}%)`;
    }

    lastElementProcentScroll(elem) {
      return ` rgba(${elem.coordinats1.toFixed(0)}, ${elem.coordinats2.toFixed(
        0
      )}, ${elem.coordinats3.toFixed(0)}, 1) ${elem.procent}%)`;
    }

    midleElement(elem) {
      return ` rgba(${elem.coordinats1.toFixed(0)}, ${elem.coordinats2.toFixed(
        0
      )}, ${elem.coordinats3.toFixed(0)}, ${elem.transparency}) ${elem.procent}%,`;
    }

    midleElementProcentScroll(elem) {
      return ` rgba(${elem.coordinats1.toFixed(0)}, ${elem.coordinats2.toFixed(
        0
      )}, ${elem.coordinats3.toFixed(0)}, 1) ${elem.procent}%,`;
    }

    color() {
      let background = ` linear-gradient(${degreePanelText.value}deg,`;
      globalButtonsArr.sort((a, b) => a.procent - b.procent);

      for (let i = 0; i < globalButtonsArr.length; i++) {
        if (globalButtonsArr[i] === globalButtonsArr.at(-1)) {
          background += this.lastElement(globalButtonsArr[i]);
        } else {
          background += this.midleElement(globalButtonsArr[i]);
        }
      }

      colorTitle.textContent = background;
      return background;
    }

    colorProcentScroll() {
      let background = ` linear-gradient(90deg,`;
      globalButtonsArr.sort((a, b) => a.procent - b.procent);

      for (let i = 0; i < globalButtonsArr.length; i++) {
        if (globalButtonsArr[i] === globalButtonsArr.at(-1)) {
          background += this.lastElementProcentScroll(globalButtonsArr[i]);
        } else {
          background += this.midleElementProcentScroll(globalButtonsArr[i]);
        }
      }

      colorTitle.textContent = background;
      return background;
    }
  };
}

function createGlobalButtonsArr() {
  for (let i = 1; i <= procentScrollInputsArr.length; i++) {
    let elem = buttonClass();
    globalButtonsArr.push(new elem(i, 50, 255, 255, 255, 1, 0));
  }
}

createGlobalButtonsArr();


function addEventForProcentScrollButtons(buttonsArr, inputsArr) {
  buttonsArr.forEach((item) => {
    item.addEventListener("mousedown", (event) => {
      buttonsArr.forEach((item) => item.classList.remove("procent_scroll_control_button_active"));
      scrollProcentPanel(item, inputsArr);
    });

    item.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  scrollProcentPanel(procentScrollButtonsArr[0], procentScrollInputsArr)
}

addEventForProcentScrollButtons(procentScrollButtonsArr, procentScrollInputsArr);