const express = require("express");
const click = require("./click");
const router = express.Router();

router.route("/").get(async (req, res)=>{
    const data = await click.findById("618a9c71fa4e5f0060363056");
    res.json(data.clicks);
});

module.exports = router;