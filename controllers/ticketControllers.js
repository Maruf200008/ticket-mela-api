const getTicket = (req, res, next) => {
    res.status(200).send("Hi i am a Ticket Page");
}

module.exports = {
    getTicket,
    
}