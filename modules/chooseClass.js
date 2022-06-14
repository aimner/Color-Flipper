class ChooseFunction {
    choose1(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats1 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * (255 - rgbNumber) / colorPanel.offsetWidth);
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        let coordinats3X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y})`;
        transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}) 0%, rgba(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}, 0) 100%)`
    }

    choose2(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats2 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats1X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        let coordinats3X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y})`;
        transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}) 0%, rgba(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}, 0) 100%)`
    }

    choose3(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats2 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats3X = 255 - ((colorPanelButtonCoordinatsX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        let coordinats1X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y})`;
        transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}) 0%, rgba(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}, 0) 100%)`
    }

    choose4(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats3 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats2X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        let coordinats1X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3})`;
        transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}) 0%, rgba(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}, 0) 100%)`
    }

    choose5(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats3 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats1X = 255 - ((colorPanelButtonCoordinatsX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3})`;
        transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}) 0%, rgba(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}, 0) 100%)`
    }

    choose6(colorPanelButtonCoordinatsX, colorPanelButtonCoordinatsY, colorPanel, rgbNumber, colorTitle, transparencyScrollRgb) {
        let coordinats1 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        let coordinats3X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        let coordinats2X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        colorTitle.style.background = `rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y})`;
        transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}) 0%, rgba(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}, 0) 100%)`
    }
}


let chooseFunctions = new ChooseFunction();

class ChooseFunction2 {
    choose1(colorPanel, c1, c2, c3) {
        // let coordinats1 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        // let coordinats2X = 255 - (colorPanelButtonCoordinatsX * (255 - rgbNumber) / colorPanel.offsetWidth);
        // let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        // let coordinats3X = 255 - (colorPanelButtonCoordinatsX * 255 / colorPanel.offsetWidth);
        // let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        
        let c1Y = ((255 - c1) * colorPanel.offsetHeight) / 255;
        let coordinats3X = ((c3 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c1Y))
        let c3X = ((255 - coordinats3X) * colorPanel.offsetWidth) / 255;
   
        colorPanelButton.style.left = `${c3X - colorPanelButton.offsetWidth / 2}px`;
        colorPanelButton.style.top = `${c1Y - colorPanelButton.offsetHeight / 2}px`;
        colorTitle.style.background = `rgb(${c1}, ${c2}, ${c3})`;
        //c1Y === colorPanelButtonCoordinatsY
        //c3X === colorPanelButtonCoordinatsX
        // colorTitle.style.background = `rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y})`;
        // transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}) 0%, rgba(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}, 0) 100%)`
    }

    choose2(colorPanel, c1, c2, c3) {
        // let coordinats2 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        // let coordinats1X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        // let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        // let coordinats3X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        // let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        // colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y})`;
        // transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}) 0%, rgba(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}, 0) 100%)`
        let c2Y = ((255 - c2) * colorPanel.offsetHeight) / 255;
        let coordinats3X = ((c3 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c2Y))
        let c3X = ((255 - coordinats3X) * colorPanel.offsetWidth) / 255;
     
        colorPanelButton.style.left = `${c3X - colorPanelButton.offsetWidth / 2}px`;
        colorPanelButton.style.top = `${c2Y - colorPanelButton.offsetHeight / 2}px`;
        colorTitle.style.background = `rgb(${c1}, ${c2}, ${c3})`;
    }

    choose3(colorPanel, c1, c2, c3) {
        // let coordinats2 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        // let coordinats3X = 255 - ((colorPanelButtonCoordinatsX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        // let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        // let coordinats1X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        // let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        // colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y})`;
        // transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}) 0%, rgba(${coordinats1Y}, ${coordinats2}, ${coordinats3Y}, 0) 100%)`
        let c2Y = ((255 - c2) * colorPanel.offsetHeight) / 255;
        let coordinats1X = ((c1 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c2Y))
        let c1X = ((255 - coordinats1X) * colorPanel.offsetWidth) / 255;
    
        colorPanelButton.style.left = `${c1X - colorPanelButton.offsetWidth / 2}px`;
        colorPanelButton.style.top = `${c2Y - colorPanelButton.offsetHeight / 2}px`;
        colorTitle.style.background = `rgb(${c1}, ${c2}, ${c3})`;
    }

    choose4(colorPanel, c1, c2, c3) {
        // let coordinats3 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        // let coordinats2X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        // let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        // let coordinats1X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        // let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        // colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3})`;
        // transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}) 0%, rgba(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}, 0) 100%)`
        let c3Y = ((255 - c3) * colorPanel.offsetHeight) / 255;
        let coordinats1X = ((c1 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c3Y))
        let c1X = ((255 - coordinats1X) * colorPanel.offsetWidth) / 255;
       
        colorPanelButton.style.left = `${c1X - colorPanelButton.offsetWidth / 2}px`;
        colorPanelButton.style.top = `${c3Y - colorPanelButton.offsetHeight / 2}px`;
        colorTitle.style.background = `rgb(${c1}, ${c2}, ${c3})`;
    }

    choose5(colorPanel, c1, c2, c3) {
        // let coordinats3 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        // let coordinats1X = 255 - ((colorPanelButtonCoordinatsX * (255 - rgbNumber)) / colorPanel.offsetWidth);
        // let coordinats1Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats1X / colorPanel.offsetHeight;
        // let coordinats2X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        // let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        // colorTitle.style.background = `rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3})`;
        // transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}) 0%, rgba(${coordinats1Y}, ${coordinats2Y}, ${coordinats3}, 0) 100%)`
        let c3Y = ((255 - c3) * colorPanel.offsetHeight) / 255;
        let coordinats2X = ((c2 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c3Y))
        let c2X = ((255 - coordinats2X) * colorPanel.offsetWidth) / 255;
       
        colorPanelButton.style.left = `${c2X - colorPanelButton.offsetWidth / 2}px`;
        colorPanelButton.style.top = `${c3Y - colorPanelButton.offsetHeight / 2}px`;
        colorTitle.style.background = `rgb(${c1}, ${c2}, ${c3})`;
    }

    choose6(colorPanel, c1, c2, c3) {
        // let coordinats1 = 255 - (colorPanelButtonCoordinatsY * 255 / colorPanel.offsetHeight);
        // let coordinats3X = 255 - ((colorPanelButtonCoordinatsX * rgbNumber) / colorPanel.offsetWidth);
        // let coordinats3Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats3X / colorPanel.offsetHeight;
        // let coordinats2X = 255 - (colorPanelButtonCoordinatsX * 255 / (colorPanel.offsetWidth));
        // let coordinats2Y = (colorPanel.offsetHeight - colorPanelButtonCoordinatsY) * coordinats2X / colorPanel.offsetHeight;
        // colorTitle.style.background = `rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y})`;
        // transparencyScrollRgb.style.background = `linear-gradient(to right, rgb(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}) 0%, rgba(${coordinats1}, ${coordinats2Y}, ${coordinats3Y}, 0) 100%)`
        let c1Y = ((255 - c1) * colorPanel.offsetHeight) / 255;
        let coordinats2X = ((c2 * colorPanel.offsetHeight) / (colorPanel.offsetHeight - c1Y))
        let c2X = ((255 - coordinats2X) * colorPanel.offsetWidth) / 255;
     
        colorPanelButton.style.left = `${c2X - colorPanelButton.offsetWidth / 2}px`;
        colorPanelButton.style.top = `${c1Y - colorPanelButton.offsetHeight / 2}px`;
        colorTitle.style.background = `rgb(${c1}, ${c2}, ${c3})`;
    }
}


let chooseFunctions2 = new ChooseFunction2();

