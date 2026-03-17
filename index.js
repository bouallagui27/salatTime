async function gettime() {
    const city = document.getElementById("wilaya").value;
    const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Tunisia&method=2&timezonestring=Africa/Tunis`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.data) {
            alert("City not found in API");
            return;
        }

        document.getElementById("fajr").innerHTML = data.data.timings.Fajr;
        document.getElementById("dhohr").innerHTML = data.data.timings.Dhuhr;
        document.getElementById("asr").innerHTML = data.data.timings.Asr;
        document.getElementById("maghrib").innerHTML = data.data.timings.Maghrib;
        document.getElementById("isha").innerHTML = data.data.timings.Isha;

        const hijriDate = data.data.date.hijri;
        const header = document.querySelector('header');

        let mydiv = document.getElementById('date');
        if (!mydiv) {
            mydiv = document.createElement('div');
            mydiv.id = 'date';
            header.appendChild(mydiv);
        }

        mydiv.innerHTML = '';

        const mydate = document.createElement('h2');
        mydate.classList.add('mt-6', 'text-center', 'text-white', 'text-2xl', 'font-bold');
        mydate.innerHTML = `${hijriDate.day} / ${hijriDate.month.ar} / ${hijriDate.year}`;
        mydiv.appendChild(mydate);

    } catch (err) {
        alert("Time not found, try again");
    }
}

document.getElementById('wilaya').addEventListener('change', gettime);







