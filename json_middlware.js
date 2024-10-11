var express = require("express");
var router = express.Router();
//if our whole app need to use the json formatting, give it in app.use()
router.use(express.json())


router.post("/newUser",(req,res)=>{
    console.log(req.body);
    res.status(200).send("success");
})

module.exports = router;