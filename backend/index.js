require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./src/routes/routes')
const db = require('./src/db/db')
const { validateAPIKey } = require('./src/middleware/middlewares')

// run migrations when the app starts
db.migrate.latest()

const PORT = process.env.PORT || 8080
const APIKey = process.env.API_KEY


app.use(express.static('../build'))
app.use(express.json())
app.use(validateAPIKey(APIKey))
app.use('/api/v1/', router)

app.listen(PORT, () => console.log("Server is listening to port", PORT))