const express = require("express");
const app = express();

const printer = require("./routes/prints");
app.use("/data", printer)

app.listen(3002, () => {

    console.log("Server running on port 3002");
});