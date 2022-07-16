const secs = document.querySelector('#segs');
const mins = document.querySelector('#mins');
const hours = document.querySelector('#hora');
const days = document.querySelector('#dia');

const data = '26 Jul 2022';
function countdown() {
    const newYearsDate = new Date(data)
    const CurrentDate = new Date()
    const totalSeconds = (newYearsDate - CurrentDate) / 1000
    const Days = Math.floor(totalSeconds / 3600 / 24)
    const Hours = Math.floor(totalSeconds / 3600) % 24
    const Mins = Math.floor(totalSeconds / 60) % 60
    const Secs =  Math.floor(totalSeconds) % 60

    days.innerHTML = formatTime(Days)
    hours.innerHTML = formatTime(Hours)
    mins.innerHTML = formatTime(Mins)
    secs.innerHTML = formatTime(Secs)

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
    /* se o valor for menor que 10, então adiciona o valor 0 antes do número */
}

countdown()
setInterval(countdown, 1000)
/* define o intervalo de 1 segundo*/

