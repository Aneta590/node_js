const express = require("express");

const app = express();

const port = 8000;
app.listen(port, () => {
  console.info("Server started on port : " + port);
});

app.get("/", (req, res) => {
  res.send("Authors API");
});
app.get("/authors/:id", (req, res) => {
  const id = res.params.id;
  const authors = [
    "Lawrence Nowell, UK",
    "William Shakespeare, UK",
    "Charles Dickens, US",
    "Oscar Wilde, UK",
  ];
  res.send(authors);
});

app.get("*", (req, res) => {
  res.send("404 - Error");
});
