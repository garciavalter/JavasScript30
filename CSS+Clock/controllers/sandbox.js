const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

function updateClock() {
    const date = new Date();
    axisS =date.getSeconds() * 6 - 270 ;
    axisM = date.getMinutes() * 6 - 270;
    axisH = (date.getHours() * 30 - 270) + (date.getMinutes() / 2);
    console.log(axisH);

    secHand.style.transform = `rotate(${axisS}deg)`;
    minHand.style.transform = `rotate(${axisM}deg)`;
    hourHand.style.transform = `rotate(${axisH}deg)`;
}

setInterval(updateClock, 1000);