// const elHour = document.querySelector('#hour')
// const elMInuts = document.querySelector('#minuts')
// const elSecond = document.querySelector('#second')
// const elWeek = document.querySelector('#week')
// const elMonth = document.querySelector('#month')
// const elFullYear = document.querySelector('#full-day')
// const elFullWeek = document.querySelector('#full-week')
// const elYears = document.querySelector('#year')

// // TIME
// function getTime() {
//     const now = new Date()
//     const date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
//     const month = now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth()
//     const year = now.getFullYear()
//     const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
//     const minut = now.getMinutes()
//     const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()

//     const week = [
//         "Yakshanba",
//         "Dushanba",
//         "Seshanba",
//         "Chorshanba",
//         "Payshanba",
//         "Juma",
//         "Shanba"
//     ]

//     const months = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December',
//     ]

//     const day_title = now.getDay()
//     elHour.textContent = hour + ':'
//     elMInuts.textContent = minut + ':'
//     elSecond.textContent = second
//     elFullYear.textContent = `${date} ${months[month]}, ${year}`
//     elFullWeek.textContent = `${week[day_title]}`
//     elYears.textContent = `${year} - ${elYear}`
// }

// setInterval(getTime, 1000)


const dayBox = document.getElementById("day-box");
const hrBox = document.getElementById("hr-box");
const minBox = document.getElementById("min-box");
const secBox = document.getElementById("sec-box");

const newYear = new Date().getFullYear();
const endDate = new Date(`January 01 ${newYear + 1} 00:00:00`);
const endTime = endDate.getTime();

function getTime() {
    const todayDate = new Date();
    const todayTime = todayDate.getTime();
    const remainingTime = endTime - todayTime;
    const oneMin = 60 * 1000;
    const oneHr = 60 * oneMin;
    const oneDay = 24 * oneHr;
    const addZeroes = (num) => (num < 10 ? `0${num}` : num);
    if (endTime < todayTime) {
        clearInterval(i);
        document.querySelector(
            ".countdawn"
        ).innerHTML = `<h1>Countdawn has expired!</h1>`;
    } else {
        const daysLeft = Math.floor(remainingTime / oneDay);
        const hrLeft = Math.floor((remainingTime % oneDay) / oneHr);
        const minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        const secLeft = Math.floor((remainingTime % oneMin) / 1000);
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secLeft);
    }
}
const i = setInterval(getTime, 1000);
getTime();