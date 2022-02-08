function startTime(duration, display) {
    var timer = duration, seconds, seconds

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration
        }

    }, 1000);
}
window.onload = function(){
var duration = 60 * 4;
var display = document.getElementById("Timer");

startTime(duration, display)
}