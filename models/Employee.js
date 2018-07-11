class Employee{
    constructor(){

    }
    static new(x,y,z,v){

        return{
            payrollNo:x,
            name:Employee._capitalize_String(y),
            email:z,
            bookings:[],
            holidayAllowance:v

        }

    }

    static _capitalize_String(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

}
module.exports = Employee
