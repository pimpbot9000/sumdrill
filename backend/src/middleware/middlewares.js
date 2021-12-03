require('dotenv').config()

const validateAPIKey = (validAPIKey) => (req, res, next) => {

    const APIKey = req.header('X-API-Key')
    console.log("hello!")
    if (APIKey != validAPIKey) {
        const response = { error: "Must provide an API key" }
        return res.status(403).json(response)

    }

    next()
  }

  module.exports = { validateAPIKey }