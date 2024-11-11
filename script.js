let temps = 60;
let ms = 0;
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const ms1 = document.getElementById("ms1");
const ms2 = document.getElementById("ms2");

function diminuerTemps() {
    if (temps >= 0) {
        let secondes = temps % 60;

        s1.innerText = Math.floor(secondes / 10);
        s2.innerText = secondes % 10;
        ms1.innerText = Math.floor(ms / 10);
        ms2.innerText = ms % 10;

        if (ms > 0) {
            ms--;
        } else {
            ms = 99;
            if (temps > 0) temps--;
        }
    }
}

setInterval(diminuerTemps, 10);
