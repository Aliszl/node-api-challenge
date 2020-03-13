const express = require('express')
const cors = require('cors')
const server = express()
server.use(express.json())
server.use(cors())

server.get('/api', (req, res) => {
    res.json({ message: 'The challenge api is UP' })
   })

 module.exports = server; 