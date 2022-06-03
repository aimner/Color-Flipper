class ChooseFunction {
    choose1(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle) {
        let coordinast1 = 255 - (mouseCoordY * 255 / colorPanel.offsetHeight);
        let coordinast2X = 255 - (mouseCoordX * (255 - rgbNumber) / colorPanel.offsetWidth);
        let coordinast2Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast2X / colorPanel.offsetHeight;
        let coordinast3X = 255 - (mouseCoordX * 255 / (colorPanel.offsetWidth));
        let coordinast3Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast3X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinast1}, ${coordinast2Y}, ${coordinast3Y})`;
    }

    choose2(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle) {
        let coordinast2 = 255 - (mouseCoordY * 255 / colorPanel.offsetHeight);
        let coordinast1X = 255 - ((mouseCoordX * rgbNumber) / colorPanel.offsetWidth);
        let coordinast1Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast1X / colorPanel.offsetHeight;
        let coordinast3X = 255 - (mouseCoordX * 255 / (colorPanel.offsetWidth));
        let coordinast3Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast3X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinast1Y}, ${coordinast2}, ${coordinast3Y})`;
    }

    choose3(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle) {
        let coordinast2 = 255 - (mouseCoordY * 255 / colorPanel.offsetHeight);
        let coordinast3X = 255 - ((mouseCoordX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        let coordinast3Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast3X / colorPanel.offsetHeight;
        let coordinast1X = 255 - (mouseCoordX * 255 / (colorPanel.offsetWidth));
        let coordinast1Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast1X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinast1Y}, ${coordinast2}, ${coordinast3Y})`;
    }

    choose4(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle) {
        let coordinast3 = 255 - (mouseCoordY * 255 / colorPanel.offsetHeight);
        let coordinast2X = 255 - ((mouseCoordX * rgbNumber) / colorPanel.offsetWidth);
        let coordinast2Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast2X / colorPanel.offsetHeight;
        let coordinast1X = 255 - (mouseCoordX * 255 / (colorPanel.offsetWidth));
        let coordinast1Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast1X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinast1Y}, ${coordinast2Y}, ${coordinast3})`;
    }

    choose5(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle) {
        let coordinast3 = 255 - (mouseCoordY * 255 / colorPanel.offsetHeight);
        let coordinast1X = 255 - ((mouseCoordX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        let coordinast1Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast1X / colorPanel.offsetHeight;
        let coordinast2X = 255 - (mouseCoordX * 255 / (colorPanel.offsetWidth));
        let coordinast2Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast2X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinast1Y}, ${coordinast2Y}, ${coordinast3})`;
    }

    choose6(mouseCoordX, mouseCoordY, colorPanel, rgbNumber, colorTitle) {
        let coordinast1 = 255 - (mouseCoordY * 255 / colorPanel.offsetHeight);
        let coordinast3X = 255 - ((mouseCoordX * rgbNumber) / colorPanel.offsetWidth);
        let coordinast3Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast3X / colorPanel.offsetHeight;
        let coordinast2X = 255 - (mouseCoordX * 255 / (colorPanel.offsetWidth));
        let coordinast2Y = (colorPanel.offsetHeight - mouseCoordY) * coordinast2X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinast1}, ${coordinast2Y}, ${coordinast3Y})`;
    }
}

let chooseFunction = new ChooseFunction();

export default chooseFunction;