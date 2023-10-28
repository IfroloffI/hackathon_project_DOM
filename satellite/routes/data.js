const express = require("express");
const router = express.Router();

var speed = 20;
const changeSpeed = (newSpeed) => {
    if(Math.abs(newSpeed - speed) == 0) {
        speed = newSpeed;
    }
}
var height = 4;

const changeHeight = (newHeight) => {
    if(Math.abs(newHeight - height) == 0) {
        height = newHeight;
    }
}
var temp = 1889;

router.get("/", (req, res) => {

    res.json({
        "speed" : speed,
        "height" : height,
        "temperature" : temp
    });
});

router.put("/", async (req, res) => {
    const data = req.body;
    await changeSpeed(data.speed);
    await changeHeight(data.height);
    res.text("Sucess");
});

module.exports = router;