const minute_left_display = document.querySelector('.minutes-left')
const minute_right_display = document.querySelector('.minutes-right')
const second_left_display = document.querySelector('.seconds-left')
const second_right_display = document.querySelector('.seconds-right')

var minutes_left = 0;
var minutes_right = 0;
var seconds_left = 0;
var seconds_right = 0;
var IntervalId;

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

start.addEventListener('click', function (event) {
    // start.style.opacity = "0";
    start.style.display = "none"
    IntervalId = setInterval(function () {
        seconds_right++;
        if (seconds_right === 10) {
            seconds_right = 0;
            seconds_left++;
            if (seconds_left === 6) {
                seconds_left = 0;
                minutes_right++;
                if (minutes_right === 10) {
                    minutes_right = 0;
                    minutes_left++;
                    if (minutes_left === 6) {
                        minutes_left = 0;
                    }
                }
            }
        }
        second_right_display.textContent = `${seconds_right}`;
        second_left_display.textContent = `${seconds_left}`;
        minute_right_display.textContent = `${minutes_right}`;
        minute_left_display.textContent = `${minutes_left}`;
    }, 1000);
});

stop.addEventListener('click', function (event) {
    start.style.display = "block";
    clearInterval(IntervalId);
});

reset.addEventListener('click', function (event) {
    clearInterval(IntervalId);
    start.style.display = "block";
    seconds_right = 0;
    second_right_display.textContent = `${seconds_right}`;
    seconds_left = 0;
    second_left_display.textContent = `${seconds_left}`;
    minutes_right = 0;
    minute_right_display.textContent = `${minutes_right}`;
    minutes_left = 0;
    minute_left_display.textContent = `${minutes_left}`;
});