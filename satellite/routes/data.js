const express = require("express");
const router = express.Router();

let speed = 1;
let height = 10;
let temp = 0;
let isWorked = true;
let inDarkZone = false;
let inMetiorits = false;

function reboot() {
    let speed = 1;
    let height = 4;
    let temp = 1000;
    let isWorked = true;
}

loop();

function loop() {
    checkInAnyZone();
    checkTemp();

    setTimeout(() => {
        loop()
    }, 1000);
}

function checkInAnyZone() {
    if (isWorked) {
        temp = 1500 + parseInt(Math.pow((-1), parseInt(Math.random() * 100)) * 100 * Math.random());
        if (inDarkZone) {
            temp -= 500;
            console.log(temp);
        }

        if (inMetiorits) {
            if (Math.random() * 100 < 15) {
                isWorked = false;
            }
        }
    }
}

function checkTemp() {
    if (temp < 1500 && temp > -50) {
        isWorked = true;
        console.log(temp);
    } else {
        isWorked = false;
    }
};

router.get("/", (req, res) => {
    res.json({
        "speed": speed,
        "height": height,
        "temperature": temp
    });
});

router.put("/", (req, res) => {
    const data = req.body;
    speed = data.speed;
    height = data.height;
});

module.exports = router;