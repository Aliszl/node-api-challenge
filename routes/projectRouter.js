const express = require("express");
const helpers = require("../data/helpers/projectModel")

const router = express.Router();

router.get('/api', async (req, res) => {
    const projects = await helpers.get();
    res.status(200).json({ projects })
   })
   router.get('/api/:id', async (req, res) => {
    const { id } = req.params;
    const projects = await helpers.get(id);
    res.status(200).json({ projects })
   })

module.exports = router;