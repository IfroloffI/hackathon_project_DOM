const express = require("express");
const router = express.Router();

router.put("/", (req, res) => {
    const data = req.body;
    console.log(data);
    fetch('http://localhost:3002/data/changeData', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req.body)
    })
});

module.exports = router;