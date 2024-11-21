const express = require("express");
const router = express.Router();

const { getDaily } = require("../../controller/car/getDaily");

router.route('/daily/:id').get(getDaily)


module.exports=router