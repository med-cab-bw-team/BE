module.exports = (req, res, next) => {
    const data = req.body;
    !data ? res.status(400).json({
        message: "Missing required fields"
    })
    : !data.username ? res.status(400).json({
        message: "username is a required field"
    })
    : !data.password ? res.status(400).json({
        message: "password is a required field"
    })
    : !data.email ? res.status(400).json({
        message: "email is a required field"
    })
    : !data.state_abbreviation ? res.status(400).json({
        message: "State is a required field"
    })
    : next()
}