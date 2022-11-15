var express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.write(`<h1 style="background-color: blue; color : white; "> Welcome to Home Page </h1>`);
    res.send();
});

app.get("/about", (req, res) => {
    res.status(200).send(`<h1 style="background-color: green; color : white;"> Welcome to About Page </h1>`);
});

app.get("/contact", (req, res) => {
    res.send(`<h1 style="background-color: yellow; color : white;"> Welcome to Contect Page </h1>`);
});

app.get("/temp", (req, res) => {
//   res.send(`<h1 style="background-color: red; color : white;"> Welcome to Temprature Page </h1>`);
res.send(
    [
        {

            id : 1,
            name : "Tarun",
        },
        {

            id : 2,
            name : "Tarun",
        },
        {

            id : 3,
            name : "Tarun",
        }
    ]
)
});
var port = 3001;
app.listen(port, () => {
  console.log(`Listing at ${port}`);
});
