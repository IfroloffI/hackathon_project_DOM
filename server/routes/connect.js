const express = require("express");
const router = express.Router();

router.put("/", async (req, res) => {
    try {
        data = req.body;
        if (verify(data)) {
            await fetch('http://localhost:3002/connect/', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;