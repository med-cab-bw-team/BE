module.exports = (req, res, next) => {
    const data = req.body;
    !data ? res.status(400).json({
        message: "Nothing to update"
    })
    : next()
}