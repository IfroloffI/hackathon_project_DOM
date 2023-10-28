const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
        fetch('http://localhost:3002/data')
            .then((response) => response.text())
            .then((body) => {
                res.json(body);
            });
});




module.exports = router;