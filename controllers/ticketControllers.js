const getTicket = (req, res, next) => {
    res.status(200).send("Hi i am a Ticket Page");
}

const getHome = (req, res, next) => {
    console.log("It is ok")
   

    res.status(200).send("Hi i am a Home Page");
}


module.exports = {
    getTicket,
    getHome
    
}