const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
        await fetch('http://localhost:3002/data/', {method: 'GET'})
            .then((response) => response.text())
            .then((body) => {
                res.json(body);
            });
});

router.put("/changeData",  async (req, res) => {
    try {
        await fetch('http://localhost:3002/data/', {method: 'PUT', headers: {'Content-Type': 'application/json' }, body: JSON.stringify(req.body)})
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;