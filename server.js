const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const allRoutes = require("./routes/routes");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

// server.get('/api', (req, res) => {
//     res.json({ message: 'The challenge api is UP' })
//    })

server.use("/projects", allRoutes.projectRouter)
server.use("/actions", allRoutes.actionRouter)

module.exports = server;
