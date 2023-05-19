// requires
const express = require('express');
const cors = require('cors');
const rowdy = require('rowdy-logger');

// express consts
const app = express();
const PORT = process.env.PORT || 8000;

// debug tool
const rowdyResults = rowdy.begin(app);
// app.use
app.use(cors())
app.use(express.json())

// GET / test index
app.get("/", (req, res) => {
    res.json({ msg: "Hello World! 🙋‍♂️"})
})

// controllers
app.use("/api", require("./controllers/api"));

// hey listen
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Quiet the mind while you listen to tunes from ${PORT} 📻`)
})

module.exports = app