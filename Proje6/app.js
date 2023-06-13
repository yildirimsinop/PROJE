const display = document.querySelector (".ClockDisplay")


function showTime() {

let date = new Date ()
console.log(date);
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
let session = "AM";


if (hour ===12 && session == "AM") {
    hour=0
}
if (hour ===12 && session == "PM") {
    hour=0;
}

if (hour>12) {
    session = "PM"
    hour = hour - 12
}

// hour > 12 ? session = "PM" : session = "AM"

if (hour < 10) {
    hour = "0" + hour
}
if (minute < 10) {
    minute = "0" + minute
}
if (second < 10) {
    second = "0" + second
}



display.innerHTML = hour + ":" + minute + ":" + second + ":" + session

}

setInterval(showTime, 1000)