const express = require("express");
const Info = require("./Info");
const router = express.Router();

router.route("/").get(async (req, res)=>{
    const data = await Info.findById("618bfe3afed608c940fa6409");
    res.json(data.clicks);
}).put(async (req, res) => { 
    const  

});

module.exports = router;
