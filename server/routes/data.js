import axios from "axios";

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    let listData;
    while (true) {
        axios.get("http://localhost:3002/speed").then((response) => {
            listData = response.data;
        });
    }
    res.json(listData);
});

module.exports = router;