const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;

var Employee = require('../models/Employee.js')
var Booking = require('../models/Booking.js')

/*
employee = Employee.new(​"E123"​, ​"joe bloggs"​, ​"joe@bloggs.com"​, ​25​)
employee.payrollNo ​//=> "E123"
employee.name ​//=> "Joe Bloggs" (note the capitalization)
employee.email ​//=> "joe@bloggs.com"
employee.bookings ​//=> []
employee.holidayAllowance ​//=> 25
*/

var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)


describe('Employee Class', function() {
    describe('Employee creation', function() {
        it("should create an employee correctly", function(){
            expect(employee.payrollNo).to.eql("E123");
            expect(employee.name).to.eql("Joe Bloggs");
            expect(employee.email).to.eql("joe@bloggs.com");
            expect(employee.bookings).to.eql([]);
            expect(employee.holidayAllowance).to.eql(25);
        });

    })

    /*
    employee.bookings = ​'nonsense'​ ​//=> Raise Exception to prevent
    overwriting (no need to write a test for this)
    */

    describe('Employee days taken initial setup', function() {
        it("should create days remaining", function(){
            expect(employee.daysRemaining()).to.eql(25);
            expect(employee.daysBooked()).to.eql(0);
            expect(employee.daysBookedAndAuthorised()).to.eql(0);
        });
    })

    /*
    employee.daysRemaining() ​//=> 25
    employee.daysBooked() ​//=> 0
    employee.daysBookedAndAuthorized() ​//=> 0

    */

    describe("Bookings", ()=>{

        describe('Employee Bookings', function() {
            it("create a booking and update the various", function(){
                employee.makeBooking("2018-09-01","2018-09-05")
                employee.makeBooking("2018-01-01","2018-01-05")
                expect(employee.daysRemaining()).to.eql(15);
                expect(employee.daysBooked()).to.eql(10);
                expect(employee.daysBookedAndAuthorised()).to.eql(0);
            });
        })
    describe('Employee Booking Types', function() {
            it("should have the correct data types", function(){
                expect(typeof employee.futureBookings()).to.eql(typeof ([new Booking("2018","2018")]))
                expect(typeof employee.pastBookings()).to.eql(typeof ([new Booking("2018","2018")]))
            });
        })


        describe('Authorisation of Employee Bookings', function() {
            it("a booking can be authorised by a member of staff", function(){
                employee.futureBookings()[0].authorise("Mr Boss Man")
                expect(employee.daysBooked()).to.eql(10);
                expect(employee.daysBookedAndAuthorised()).to.eql(5);
                //expect(employee.futureBookings(true)).to.be.a([Booking]);
            });
        })

        describe('Return future authorised bookings', function() {
            it("Given an optional arguement, futureBookings  should only return authorised bookings", function(){
                expect(employee.futureBookings(true)[0].isAuthorised()).to.eql(true);
            })
        })
        describe('Return past authorised bookings', function() {
            it("Given an optional arguement, pastBookings should only return authorised bookings", function(){
                employee.pastBookings()[0].authorise("Mr Boss Man")
                expect(employee.pastBookings(true)[0].isAuthorised()).to.eql(true);
                //expect(employee.futureBookings(true)).to.be.a([Booking]);
            });
        })
        
    })
    /*
    employee.futureBookings() ​//=> [Booking] Array of all future bookings
    employee.pastBookings() ​//=> [Booking] Array of all past bookings
    employee.futureBookings()[​0​].authorize(​"Mr Boss Man"​) ​// Authorise a
    booking as before.
    employee.daysBooked() ​//=> 5
    employee.daysBookedAndAuthorized() ​//=> 5


    employee.futureBookings(​true​) ​//=> Only include authorized bookings
    employee.pastBookings(​true​) ​//=> Only include authorized bookings
    */

})