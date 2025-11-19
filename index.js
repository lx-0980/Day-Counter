const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

const startDate = new Date("2025-11-20");

function countdown() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let mins = now.getMinutes() - startDate.getMinutes();
    let secs = now.getSeconds() - startDate.getSeconds();

    // --- Adjust if days are negative ---
    if (secs < 0) {
        secs += 60;
        mins--;
    }
    if (mins < 0) {
        mins += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        // previous month
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }

    // --- Adjust if months are negative ---
    if (months < 0) {
        months += 12;
        years--;
    }

    // Update UI
    yearsEl.innerHTML = years;
    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = format(hours);
    minsEl.innerHTML = format(mins);
    secEl.innerHTML = format(secs);
}

function format(n) {
    return n < 10 ? "0" + n : n;
}

countdown();
setInterval(countdown, 1000);
