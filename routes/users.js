//file related to user

//? remember that everytime we make a request, it starts checking from the top to bottom
// always put dynamic routes in the end

var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("usersList");
});

router.get("/newUser", (req, res) => {
  res.send("new user");
});


//! different operation with same parameter
// here its like we simply need to mention the path once instead of mentioning it 3 times for 3 different operations
router
  .route("/userOperation/:id")
  .get((req,res) => {
    res.send("get user with id " + req.params.id )
   
  })
  .patch((req, res) => {
    res.send("edit user with id " + req.params.id);
  })
  .delete((req, res) => {
    res.send("delete user with id " + req.params.id);
  });

//! MIDDLEWARE

// It acts between our server and client. before recieving and sending anything it will be handled by this middleware
//*every middleware will have a parameter req,res and next

//! params
// her whenever there is a parameter with id is called, the function will get invoked
//* params acts as a middleware
// so the get method will be only called after this function and it will work only when we call //* next()
router.param("id",(req,res,next,id)=>{
   console.log(id);
   next()
})


//! :
//to create a path which will be dynamic (based on differnt userid)
// ex : "http://localhost:300/users/32"

//? if we put this code above /newUser path, even if we inlcude /newUser in the path, this will get driggered as : means anything can come after /users.
//so always add : at the end of all functions

router.get("/:userId", (req, res) => {
    var uid = req.params.userId;
    res.send("get user with user id :" + uid);
  });
  
  module.exports = router;
  