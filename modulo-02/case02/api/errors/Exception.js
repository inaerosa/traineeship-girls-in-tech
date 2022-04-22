class NotFoundError extends Error{
    constructor (message){
        super(message)
        this.name = "Not Found"
        this.message = message
        this.type = "not-found"
        this.status = 404
    }
}

class InvalidData extends Error{
    constructor (message){
        super(message)
        this.name = "Invalid Information"
        this.message = message
        this.type = "Bad Request"
        this.status = 400
    }
}

module.exports = {
    notFound : (message) => {
        if (message instanceof Error === true){
            return message
        }
        const error = new NotFoundError(message)
        return error;
    },
    
   invalidData : (message) => {
        if (message instanceof Error === true){
            return message
        }
        const error = new InvalidData(message)
        return error;
    }
    
};