let isOn = false;

function toggleBulb() {
    let bulb = document.getElementById("bulb");
    let btn = document.getElementById("toggleBtn");
    let status = document.getElementById("status");

    if (isOn) {
        bulb.src = "light off.png";
        btn.innerText = "Turn ON";
        status.innerText = "Bulb is OFF";
        isOn = false;
    } else {
        bulb.src = "light on.png";
        btn.innerText = "Turn OFF";
        status.innerText = "Bulb is ON";
        isOn = true;
    }
}