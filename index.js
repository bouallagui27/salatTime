    const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city={city}&country=Tunisia&method=2`;
    let city = document.getElementById("wilaya").value
 async function gettime (){
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        document.getElementById("fajr").innerHTML = data.data.timings.Fajr
        document.getElementById("dhohr").innerHTML = data.data.timings.Dhuhr
        document.getElementById("asr").innerHTML = data.data.timings.Asr
        document.getElementById("maghrib").innerHTML = data.data.timings.Maghrib
        document.getElementById("isha").innerHTML = data.data.timings.Isha
    }
    catch(err){
        alert(" time not found try again")
    }
 }