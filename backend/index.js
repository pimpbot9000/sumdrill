require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./src/routes/routes')
const db = require('./src/db/db')
const e = require('express')

// run migrations when the app starts
db.migrate.latest()

const PORT = process.env.PORT || 8080

if (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "docker_compose") {
    app.use(cors())
} else {
    console.log("CORS disabled on production")
}

app.use(express.static('../build'))
app.use(express.json())
app.use('/api/v1/', router)

app.listen(PORT, () => console.log("Server is listening to port", PORT))