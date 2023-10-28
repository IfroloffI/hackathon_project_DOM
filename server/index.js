const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

// Routers
const dataRouter = require("./routes/data");
app.use("/data", dataRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
