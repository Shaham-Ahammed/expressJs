const express = require("express");
const app = express();
app.listen(300);

var names = ["adhil", "amal", "ajas", "shaham", "mujsh"];

//searching for a specified name
//while doing this include //* ?search=searchWord
//ex : "http://localhost:300/?search=sh"

app.get("/", (req, res) => {
  const searchQuery = req.query.search;
  console.log("heyy");
  if (searchQuery) {
    const filteredList = names.filter((ele) =>
      ele.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.status(200).json({ filteredNames: filteredList });
  } else {
    res.status(200).json({ name: names });
  }
});

//basic get request
//this is not a json body. while sending jsonbody use json insteasd of send

app.get("/home", (req, res) => {
  res.status(200).send("hello");
});
