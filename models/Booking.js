class Booking{
    constructor(startDate, endDate){
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
        this.authorised = false
        this.authorisedVia = null
        this.authorisedOnDate = null
    }

    numberOfDays(){
        return Math.round((this.endDate-this.startDate)/(1000*60*60*24))+1
    }

    isAuthorised(){
        return this.authorised
    }

    authorisedBy(){
        return this.authorisedVia
    }

    authorisedOn(){
        return this.authorisedOnDate
    }

    authorise(personel, optionalDate){
        var date = new Date().toLocaleDateString()
        if(typeof optionalDate !== "undefined") {
            date = optionalDate
        }

        this.authorised = true
        this.authorisedVia = personel
        this.authorisedOnDate = date
    }

    toJSON(){
        return this
    }
}

module.exports = Booking
