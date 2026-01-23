const yearEl = document.querySelector("#year");
const lastModEl = document.querySelector("#lastModified");
const windChillEl = document.querySelector("#windchill");

const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");

const temperature = Number(tempEl.textContent); // °C
const windSpeed = Number(windEl.textContent);   // km/h

function calculateWindChill(tempC, windKmh) {
    return 13.12 + (0.6215 * tempC) - (11.37 * (windKmh ** 0.16)) + (0.3965 * tempC * (windKmh ** 0.16));
}


function canCalculateWindChill(tempC, windKmh) {
    return tempC <= 10 && windKmh > 4.8;
}

yearEl.textContent = new Date().getFullYear();
lastModEl.textContent = document.lastModified;

if (canCalculateWindChill(temperature, windSpeed)) {
    const wc = calculateWindChill(temperature, windSpeed);
    windChillEl.textContent = `${wc.toFixed(1)} °C`;
} else {
    windChillEl.textContent = "N/A";
}
