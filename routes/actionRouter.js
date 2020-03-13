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
  
  router.delete('/api/:id', async(req, res) => {
    const { id } = req.params;
  
    helpers
      .remove(id)
      .then(action => {
        if (!action) {
          res
            .status(404)
            .json({ message: "The action with the specified ID does not exist." });
        } else {
          res.status(204).json({ message: "Removed " });
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.put("/api/:id", async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    helpers
      .update(id, changes)
      .then(action => {
        if (!action) {
          res.status(404).json({
            message: "Please provide a decription and notes for the project you wish to update"
          });
        } else if (!action) {
          res
            .status(400)
            .json({ message: "The project with the specified ID does not exist." });
        } else {
          res.status(200).json(changes);
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "could not update action"
        });
      });
  });
module.exports = router;