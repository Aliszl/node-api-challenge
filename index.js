require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 9000
 
 
app.get('/api', (req, res) => {
 res.json({ message: 'The challenge api is UP' })
})
app.listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
})

