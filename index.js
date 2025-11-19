const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec"); 
const yearsEl = document.getElementById("years");

const startDate = new Date("2023-10-16");

function countdown() {
    const now = new Date();

    // Calculate full years passed
    let years = now.getFullYear() - startDate.getFullYear();

    // Check if full year completed based on month/date
    let anniversary = new Date(startDate);
    anniversary.setFullYear(startDate.getFullYear() + years);

    if (now < anniversary) {
        years--;
        anniversary = new Date(startDate);
        anniversary.setFullYear(startDate.getFullYear() + years);
    }

    // Remaining difference after counting full years
    let diffMs = now - anniversary;

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    yearsEl.innerHTML = years;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(seconds);
}

function formatTime(t) {
    return t < 10 ? "0" + t : t;
}

countdown();
setInterval(countdown, 1000);
