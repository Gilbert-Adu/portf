const express = require("express");
const app = express();

const port = 4000;


app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "/static"))

app.get("/", (req, res) => {
    res.render("index.html")
});

app.listen(port, () => {
    console.log(`listening on ${port}`)
});