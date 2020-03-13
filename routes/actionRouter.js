const express = require("express");
const helpers = require("../data/helpers/actionModel")

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'The challenge api is UP' })
   })

// router.get("/api/:id", async (req, res) => {
//     const { id } = req.params;
//     const actions = await helpers.get(id);
//     res.status(200).json({ actions });
//   });
  

router.post("/api/:id", async (req, res) => {
    const payload = req.body;
    helpers
      .insert(payload)
      .then(action => {
        if (!action) {
          res.staus(400).json({
            errorMessage: "Please provide description and notes"
          });
        } else {
          res.status(201).json(payload);
        }
      })
      .catch(error => {
        console.log(error);
        res.end();
        res.status(500).json({
          error: "could not add action"
        });
      });
  });
  
module.exports = router;