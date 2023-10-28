const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

// Routers
//const postRouter = require("./routes/posts");
//app.use("/posts", postRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
