document.getElementById('slider').value = 0;
var startValue = document.getElementById('slider').value;

function sliderFunction(){

    let currentValue = document.getElementById('slider').value;

    let sliderWidth = document.getElementById('slider').offsetWidth;
    let rectangleWidth = document.getElementById('red').offsetWidth;

    let step = (sliderWidth - rectangleWidth) / 100;

    let redLeftMrgn = ((sliderWidth - rectangleWidth) - (currentValue * step)) + 'px';
    let blueLeftMrgn = (currentValue * step) + 'px';

    document.getElementById('red').style.marginLeft =  redLeftMrgn;
    document.getElementById('blue').style.marginLeft = blueLeftMrgn;

    let bgColor = `rgba(0, 0, 0,${1 - (currentValue/100)})`;
    document.getElementById('background').style.backgroundColor = bgColor;

    startValue = currentValue;
}