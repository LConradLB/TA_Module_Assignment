const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;

var Booking = require('../models/Booking.js')

/*
booking = ​new​ Booking(​new​ Date(​"2018-09-01"​), ​new​ Date(​"2018-09-05"​)
booking.startDate ​//=> Date object for "2018-09-01"
booking.endDate ​//=> Date object for "2018-09-05"

booking.numberOfDays() ​//=> 5

booking.isAuthorized() ​//=> false
booking.authorizedBy() ​//=> null
booking.authorizedOn() ​//=> null

booking.authorize(​"Mr Boss Man"​)
booking.isAuthorized() ​//=> true
booking.authorizedBy() ​//=> "Mr Boss Man"
booking.authorizedOn() ​//=> Date object for today's Date

booking.authorize(​"Mr Boss Man Again"​, ​new​ Date(​"2018-07-01"​)) ​// This
function takes an optional argument representing the date it was
authorized on.
booking.isAuthorized() ​//=> true
booking.authorizedBy() ​//=> "Mr Boss Man Again"
booking.authorizedOn() ​//=> Date object for "2018-07-01" (the date
provided)
*/

var booking = new Booking(new Date("2018-09-01"), new Date("2018-09-05"))

describe('Booking creation', function() {
    it("should create a new booking with the correct start and end date", function(){
        expect(booking.startDate).to.eql(new Date("2018-09-01"));
        expect(booking.endDate).to.eql(new Date("2018-09-05"));
    });
})

describe('Day calculation', function() {
    it("should correctly calculate the length of time taken", function(){
        expect(booking.numberOfDays()).to.eql(5);
    });
})

describe('Initial Authorisation Check', function() {
    it("should not be authorised when created", function(){
        expect(booking.isAuthorised()).to.eql(false);
    });
    it("should have no linked authoriser", function(){
        expect(booking.authorisedBy()).to.eql(null);
    });
    it("should not have an authorised date", function(){
        expect(booking.authorisedOn()).to.eql(null);
    });
})

describe('Authorisation Creation', function() {
    it("should not be authorised when created", function(){
        booking.authorise("Mr Boss Man")
        expect(booking.isAuthorised()).to.eql(true);
    });
    it("should have no linked authoriser", function(){
        expect(booking.authorisedBy()).to.eql("Mr Boss Man");
    });
    it("should have a date equal to today", function(){
        expect(booking.authorisedOn()).to.eql(new Date());
    });
})

describe('Further Authorisation Creation', function() {
    it("should not be authorised when created", function(){
        booking.authorise("Mr Boss Man Again", new Date("2018-07-01"))
        expect(booking.isAuthorised()).to.eql(true);
    });
    it("should have no linked authoriser", function(){
        expect(booking.authorisedBy()).to.eql("Mr Boss Man Again");
    });
    it("should be able to give a second date arguement", function(){
        expect(booking.authorisedOn()).to.eql(new Date("2018-07-01"));
    });
})
