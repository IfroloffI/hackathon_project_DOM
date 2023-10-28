const express = require("express");
const router = express.Router();

let speed = 1;
let height = 4;
let temp = 1889;
let isWorked = true;

const checkTemp = async () => {
    while (true) {
        if (temp < 1500 && temp > -50) {
            isWorked = true;
            console.log(isWorked);
        }
        else {
            isWorked = false;
        }
    }
};

router.get("/", (req, res) => {
    res.json({
        "speed" : speed,
        "height" : height,
        "temperature" : temp
    });
});

router.put("/", (req, res) => {
    const data = req.body;
    speed = data.speed;
    height = data.height;
});

await checkTemp();
module.exports = router;