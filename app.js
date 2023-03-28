const express = require("express");
const cors = require("cors");
const userRouter = require("./Routes/userRoute");
require("./Config/db");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/./Views/index.html");
})

// Route not found
app.use((req,res, next)=>{
    res.status(404).json({
        message: "Route not found"
    });
});

// Handling Server error
app.use((err, req, res, next)=>{
    res.status(500).json({
        message: "Something broke"
    });
});

module.exports = app;