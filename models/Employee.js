class Employee{
    constructor(payrollNumber,name,emailAddress,allowance){
        this.payrollNo = payrollNumber
        this.name = this._capitalize_String(name)
        this.email = emailAddress
        this._bookings =[]
        this.holidayAllowance = allowance
    }

    set bookings (booking) {
        //this._bookings = booking
        throw ("Can't mutate bookings property")
    }

    get bookings() {
        return this._bookings
    }

    _capitalize_String(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
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