const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
// Routers
const dataRouter = require("./routes/data");
app.use("/data", dataRouter);
const connectRouter = require("./routes/connect");
app.use("/connect", connectRouter);
const restartRouter = require("./routes/restart");
app.use("/restart", restartRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
