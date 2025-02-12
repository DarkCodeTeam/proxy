const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("🔹 Mock Backend Response");
});

app.listen(5000, () => {
    console.log("🔹 Mock Backend is running on port 5000");
});
