const express = require("express");
const router = express.Router();

let speed = 1;
let height = 4;
let temp = 1889;
let isWorked = true;
let inDarkZone = false;
let inMetiorits = false;

loop();
function loop() {
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        loop()
    }, 1000);
}

const checkInAnyZone = async () => {
    if (isWorked) {
        temp = 1500 + parseInt(Math.pow((-1), parseInt(Math.random() * 100)) * 100 * Math.random());
        if (!inDarkZone) {
            temp -= 500;
            console.log(temp);
        }

        if (inMetiorits) {
            if (Math.random() * 100 < 15) {
                isWorked = false;
            }
        }
    }
};

const isWorking = async () => {
    if (!isWorked) {
        speed = 1;
    }
};

const checkTemp = async () => {
    if (temp < 1500 && temp > -50) {
        isWorked = true;
        console.log(isWorked);
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