const express = require("express");
const router = express.Router();

let speed = 5;
router.get("/", (req, res) => {
    res.json({ data: speed });
});
router.put("/", (req, res) => {
    res.json({ data: speed });
});
module.exports = router;