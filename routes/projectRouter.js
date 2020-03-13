const express = require("express");
const helpers = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/api", async (req, res) => {
  const projects = await helpers.get();
  res.status(200).json({ projects });
});

router.post("/api", async (req, res) => {
  const payload = req.body;
  helpers
    .insert(payload)
    .then(project => {
      if (!project) {
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
        error: "could not add project"
      });
    });
});

router.get("/api/:id", async (req, res) => {
  const { id } = req.params;
  const projects = await helpers.get(id);
  res.status(200).json({ projects });
});

router.delete('/api/:id', async(req, res) => {
    const { id } = req.params;
    const deletedProject =[];
  
    helpers.get(id).then(project =>{
      deletedProjects.push(project);
      res.status(200).json(project);
    })
  
    helpers
      .remove(id)
      .then(project => {
        if (!project) {
          res
            .status(404)
            .json({ message: "The project with the specified ID does not exist." });
        } else {
          res.status(204).json({ message: "Removed " });
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

module.exports = router;
