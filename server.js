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


//! ROUTES

/*in a app there will be many api s and there will be different routes as well.
inorder to handle this routings we create a seperate folder called routes and inside that in seperate
js files we will create seperate methods for diffeent purposes.

for ex: if there is something related to users, we create a users.js and handle its operation there and if there is 
admin we handle from seperate file and also we integrate it to our main as well

Likewise we can also seperae different routes based on post,get,patch and delete
*/

var newUser = require('./json_middlware.js');
var userRoutes = require('./routes/users.js');
var adminRoutes = require('./routes/admin.js');

//! use()
// use() is used to integrate the routes in to our main app
// "/users" -> this means that in every route there will be /users initially and we dont need to write it again and again
app.use("/users",userRoutes);
app.use("/admin",adminRoutes);
app.use(newUser)