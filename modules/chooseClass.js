class ChooseFunction {
    choose1(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle) {
        let coordinats1 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * (255 - rgbNumber) / colorPanel.offsetWidth);
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        let coordinats3X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y})`;
    }

    choose2(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle) {
        let coordinats2 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats1X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        let coordinats3X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y})`;
    }

    choose3(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle) {
        let coordinats2 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats3X = 255 - ((colorPanelButtonCoordinatsX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        let coordinats1X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y})`;
    }

    choose4(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle) {
        let coordinats3 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats2X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        let coordinats1X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3})`;
    }

    choose5(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle) {
        let coordinats3 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats1X = 255 - ((colorPanelButtonCoordinatsX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3})`;
    }

    choose6(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle) {
        let coordinats1 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats3X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y})`;
    }
}


let chooseFunctions = new ChooseFunction();

export default chooseFunctions;