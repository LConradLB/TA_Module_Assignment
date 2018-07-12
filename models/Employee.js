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
        //this._bookings = booking
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
        return JSON.stringify(this)
    }
}


module.exports = Employee


/*
set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }

Object.defineProperties(obj, {
  'getFoo': {
      value: function () {
          return this.foo;
      }
  },
  'setFoo': {
      value: function (val) {
          this.foo = val;
      }
  }
});


var _name = name
        this.setName = function(name) { _name = name; }
        this.getName = function() { return _name; }




        payrollNo:payrollNumber,
            name:Employee._capitalize_String(name),
            email:emailAddress,
            private bookings:[],
            holidayAllowance:allowance

*/