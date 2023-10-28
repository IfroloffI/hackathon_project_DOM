const express = require("express");
const app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const printer = require("./routes/prints");
app.use("/", printer);

const data = require("./routes/data");
app.use("/data", data);

app.listen(3002, () => {

    console.log("Server running on port 3002");
});