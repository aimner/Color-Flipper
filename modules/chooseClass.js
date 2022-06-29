class ChooseFunction {
    choose1(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats1 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * (255 - rgbNumber) / colorPanel.offsetWidth);
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        let coordinats3X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        let elem = globalButtonsArr.find(item => item.active === true) // ищем нужный объект в массиве кнопок цветов, и переписываем у него координаты
        elem.coordinats1 = coordinats1;
        elem.coordinats2 = coordinats2Y;
        elem.coordinats3 = coordinats3Y;
        colorTitle.style.background = elem.color();
        procentScroll.style.background = elem.colorProcentScroll();
        transparencyScrollRgb.style.background = `linear-gradient(to left, rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}) 0%, rgba(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}, 0) 100%)`;
    
        colorsExampleArr.find(item => +item.dataset.number === +elem.dataNumber).style.background = `rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}`;
        // debugger
    }

    choose2(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats2 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats1X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        let coordinats3X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        let elem = globalButtonsArr.find(item => item.active === true) // ищем нужный объект в массиве кнопок цветов, и переписываем у него координаты
        elem.coordinats1 = coordinats1Y
        elem.coordinats2 = coordinats2
        elem.coordinats3 = coordinats3Y
        colorTitle.style.background = elem.color();
        procentScroll.style.background = elem.colorProcentScroll();
        transparencyScrollRgb.style.background = `linear-gradient(to left, rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}) 0%, rgba(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}, 0) 100%)`
        colorsExampleArr.find(item => +item.dataset.number === +elem.dataNumber).style.background = `rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}`;
    }

    choose3(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats2 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats3X = 255 - ((colorPanelButtonCoordinatsX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        let coordinats1X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        let elem = globalButtonsArr.find(item => item.active === true) // ищем нужный объект в массиве кнопок цветов, и переписываем у него координаты
        elem.coordinats1 = coordinats1Y
        elem.coordinats2 = coordinats2
        elem.coordinats3 = coordinats3Y
        colorTitle.style.background = elem.color();
        procentScroll.style.background = elem.colorProcentScroll();
        transparencyScrollRgb.style.background = `linear-gradient(to left, rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}) 0%, rgba(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}, 0) 100%)`
        colorsExampleArr.find(item => +item.dataset.number === +elem.dataNumber).style.background = `rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}`;
    }

    choose4(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats3 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats2X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        let coordinats1X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        let elem = globalButtonsArr.find(item => item.active === true) // ищем нужный объект в массиве кнопок цветов, и переписываем у него координаты
        elem.coordinats1 = coordinats1Y
        elem.coordinats2 = coordinats2Y
        elem.coordinats3 = coordinats3
        colorTitle.style.background = elem.color();
        procentScroll.style.background = elem.colorProcentScroll();
        transparencyScrollRgb.style.background = `linear-gradient(to left, rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}) 0%, rgba(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}, 0) 100%)`
        colorsExampleArr.find(item => +item.dataset.number === +elem.dataNumber).style.background = `rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}`;
    }

    choose5(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats3 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats1X = 255 - ((colorPanelButtonCoordinatsX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        let elem = globalButtonsArr.find(item => item.active === true) // ищем нужный объект в массиве кнопок цветов, и переписываем у него координаты
        elem.coordinats1 = coordinats1Y
        elem.coordinats2 = coordinats2Y
        elem.coordinats3 = coordinats3
        colorTitle.style.background = elem.color();
        procentScroll.style.background = elem.colorProcentScroll();
        transparencyScrollRgb.style.background = `linear-gradient(to left, rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}) 0%, rgba(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}, 0) 100%)`
        colorsExampleArr.find(item => +item.dataset.number === +elem.dataNumber).style.background = `rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}`;
    }

    choose6(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats1 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats3X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        let elem = globalButtonsArr.find(item => item.active === true) // ищем нужный объект в массиве кнопок цветов, и переписываем у него координаты
        elem.coordinats1 = coordinats1
        elem.coordinats2 = coordinats2Y
        elem.coordinats3 = coordinats3Y
        colorTitle.style.background = elem.color();
        procentScroll.style.background = elem.colorProcentScroll();
        transparencyScrollRgb.style.background = `linear-gradient(to left, rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}) 0%, rgba(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}, 0) 100%)`
        colorsExampleArr.find(item => +item.dataset.number === +elem.dataNumber).style.background = `rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}`;
        
    }
}


let chooseFunctions = new ChooseFunction();

class ChooseFunction2 {
    choose1(colorPanel, elem) {
        let c1Y = ((255 - elem.coordinats1) * colorPanel.offsetHeight) / 255;
        let coordinats3X = ((elem.coordinats3 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c1Y))
        let c3X = ((255 - coordinats3X) * colorPanel.offsetWidth) / 255;
        console.log('choose1')
        this.changeColorMetod(c3X, c1Y, elem)
        
    }

    choose2(colorPanel, elem) {
        let c2Y = ((255 - elem.coordinats2) * colorPanel.offsetHeight) / 255;
        let coordinats3X = ((elem.coordinats3 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c2Y))
        let c3X = ((255 - coordinats3X) * colorPanel.offsetWidth) / 255;
        console.log('choose2')
        this.changeColorMetod(c3X, c2Y, elem)
    }

    choose3(colorPanel, elem) {
        let c2Y = ((255 - elem.coordinats2) * colorPanel.offsetHeight) / 255;
        let coordinats1X = ((elem.coordinats1 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c2Y))
        let c1X = ((255 - coordinats1X) * colorPanel.offsetWidth) / 255;
        console.log('choose3')
        this.changeColorMetod(c1X, c2Y, elem)
    }

    choose4(colorPanel, elem) {
        let c3Y = ((255 - elem.coordinats3) * colorPanel.offsetHeight) / 255;
        let coordinats1X = ((elem.coordinats1 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c3Y))
        let c1X = ((255 - coordinats1X) * colorPanel.offsetWidth) / 255;
        console.log('choose4')
        this.changeColorMetod(c1X, c3Y, elem)
    }

    choose5(colorPanel, elem) {
        let c3Y = ((255 - elem.coordinats3) * colorPanel.offsetHeight) / 255;
        let coordinats2X = ((elem.coordinats2 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c3Y))
        let c2X = ((255 - coordinats2X) * colorPanel.offsetWidth) / 255;
        console.log('choose5')
        this.changeColorMetod(c2X, c3Y, elem)
    }

    choose6(colorPanel, elem) {
        let c1Y = ((255 - elem.coordinats1) * colorPanel.offsetHeight) / 255;
        let coordinats2X = ((elem.coordinats2 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c1Y))
        let c2X = ((255 - coordinats2X) * colorPanel.offsetWidth) / 255;
        console.log('choose6')
        this.changeColorMetod(c2X, c1Y, elem)
    }

    changeColorMetod(X, Y, elem) {
        colorPanelButton.style.left = `${X - colorPanelButton.offsetWidth / 2}px`;
        colorPanelButton.style.top = `${Y - colorPanelButton.offsetHeight / 2}px`;
        colorTitle.style.background = elem.color();
        colorScrollControlButton.style.left = `${elem.colorScrollButtonCoordinats}px`;
        rgbNumber = elem.rgbNumber
        colorPanel.style.background =  elem.colorPanelBackgroundColor;
        transparencyScrollRgb.style.background = `linear-gradient(to left, rgb(${elem.coordinats1}, ${elem.coordinats2}, ${elem.coordinats3}) 0%, rgba(${elem.coordinats1}, ${elem.coordinats2}, ${elem.coordinats3}, 0) 100%)`
        transparencyScrollControlButton.style.left = `${elem.transparency * transparencyScroll.offsetWidth}px`
        // debugger
    }
}


let chooseFunctions2 = new ChooseFunction2();

