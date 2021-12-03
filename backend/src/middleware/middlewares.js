require('dotenv').config()

const validateAPIKey = (validAPIKey) => (req, res, next) => {

    const APIKey = req.header('X-API-Key')

    if (APIKey != validAPIKey) {
        const response = { error: "Must provide correct API key" }
        return res.status(403).json(response)
    }

    next()
}

module.exports = { validateAPIKey }