const express = require("express");
const router = express.Router();

let speed = 1;
let radio = '';
l1 = 68;
l = 0;
counter = 0;
let height = 15;
let temp = 1000;
let isWorked = true;
let inDarkZone = false;
let inMetiorits = false;

function reboot() {
    speed = 1;
    height = 10;
    temp = 1000;
    isWorked = true;
    let inDarkZone = false;
    let inMetiorits = false;
    console.log("SUCESS REBOOT");
}

loop();
function loop() {

    ZonesLogic();
    checkInAnyZone();
    checkTemp();
    chechHeight();
    generateRandomString();

    setTimeout(() => {
        loop()
    }, 1000);
}

function ZonesLogic(){
    if (isWorked) {
        temp = 1500 + parseInt(Math.pow((-1), parseInt(Math.random() * 100)) * 100 * Math.random());
        if (inDarkZone) {
            temp -= 500;
        }

        if (inMetiorits) {
            if (Math.random() * 100 < 15) {
                isWorked = false;
            }
        }
    }
}

function generateRandomString() {

    let chance = parseInt(Math.random() * 100);

    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    switch(chance) {
        case 1: 
            radio = "GrEEtiNgs"
            break;
        case 2:  
            radio = "frOm"
            break;
        
        case 3:  
            radio = "spACe"
            break;

        case 4:  
          radio = "BMsTu"
            break;
      
        case 5:  
            radio = "bRaNC"
            break;
        default:
            for (let i = 0; i < 6; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            radio = result;
      }
  };

function checkTemp(){

    if (temp < 2000 && temp > -50) {
        isWorked = true;
        console.log(temp, " ", l, " ", inMetiorits, " ", isWorked, " ", counter, " ", radio);
    } else {
        isWorked = false;
    }
};

function chechHeight(){
    if (height < 10) {
        isWorked = false;
    }
    if (height > 20) {
        isWorked = false;
    }
};

function checkInAnyZone(){
    if(!isWorked) {
        speed = 1;
    }

    l += speed*6;



    if (l1 < l && 2*l1 > l) {
        inDarkZone = true;
    }
    else {
        inDarkZone = false;
    }

    if ((l1*(7/3) < l && (8/3)*l1 > l) && height > 15) {
        inMetiorits = true;
    }
    else {
        inMetiorits = false;
    }

    if (l > 204) {
        l = 0;
        counter++;
    }
};

router.get("/", (req, res) => {
    res.json({
        "speed": speed,
        "height": height,
        "temperature": temp,
        "connect": isWorked,
        "radio": radio
    });
});

router.put("/changeData",  (req, res) => {
    const data =  req.body;
    if("reboot" in data){
        reboot();
    }
    if("speed" in data) {
        speed = data.speed;
    }
    if("height" in data) {
        height = data.height;
    }
});

module.exports = router;