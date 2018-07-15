const Booking = require("./Booking");
class Employee{
    constructor(payrollNumber,name,emailAddress,allowance){
        this.payrollNo = payrollNumber
        this.name = this._capitalize_String(name)
        this.email = emailAddress
        this._bookings =[]
        this.holidayAllowance = allowance
        this.daysBookedOff = 0
        this.daysAuthorised = 0

    }

    set bookings (booking) {
        throw ("Can't mutate bookings property")
    }

    get bookings() {
        return this._bookings
    }

    daysRemaining(){
        return this.holidayAllowance
    }

    daysBooked(){
        return this.daysBookedOff
    }

    daysBookedAndAuthorised(){
        this.daysAuthorised = 0
        for(var booking of this._bookings){
            if(booking.isAuthorised()){
                this.daysAuthorised += booking.numberOfDays()
            }
        }
        return this.daysAuthorised
    }

    _capitalize_String(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    makeBooking(startDate, endDate){
        var booking = new Booking(startDate,endDate)
        this.holidayAllowance -= booking.numberOfDays()
        this.daysBookedOff += booking.numberOfDays()
        this._bookings.push(booking)
    }

    futureBookings(returnOnlyAuthorised){
        switch(returnOnlyAuthorised){
            case true: return this._bookings.filter(booking => (booking.startDate > new Date()) && (booking.isAuthorised() == true));
            default: return this._bookings.filter(booking => booking.startDate > new Date());
        }
    }

    pastBookings(returnOnlyAuthorised){
        switch(returnOnlyAuthorised){
            case true: return this._bookings.filter(booking => ((booking.startDate < new Date()) && (booking.isAuthorised() == true)));
            default: return this._bookings.filter(booking => booking.startDate < new Date());
        }
    }

    toJSON(){
        return (this)
    }
}


module.exports = Employee
