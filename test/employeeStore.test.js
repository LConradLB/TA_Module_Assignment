/*

Write a utility class that exposes two methods:
EmployeeStore.save(employee)​ should take an instance of Employee​ and append all of its data to a file on disk.
EmployeeStore.load()​ should read this file and return an array of Employee​ objects.
You should think carefully about how to test these methods - it may make sense to test them both together.

*/

const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;

var fs = require("fs");


var EmployeeStore = require('../lib/employeeStore.js')
var Employee = require('../models/Employee.js')

describe('EmployeeStore Class', function() {
    describe('File Creation', function() {
        it("Should add an employee to the file", function(){
            //Setup 
            //get current file contents -> store in temp
            console.log("1")
            var temp = fs.readFileSync('./storage/employeeStore.json', 'utf8')

            //wipe file
            console.log("2")
            fs.writeFileSync('./storage/employeeStore.json',"", 'utf8', function (err) {
                if (err) {
                    console.log('Some error occured - file either not saved or corrupted file saved.');
                } else{
                    console.log('It\'s saved!');
                }
            });
            console.log("creation")
            //create employee
            var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)
            employee.makeBooking("2018-09-01","2018-09-05")
            //add employee to file
            console.log("3")
            EmployeeStore.save(employee.toJSON(), "./storage/employeeStore.json")

            console.log("save")

            //read file .load() and compare contents to expectation
            expect(EmployeeStore.load("./storage/employeeStore.json")).to.eql(employee.toJSON())

            console.log("Loads")
            //wipe file
            fs.writeFileSync("./storage/employeeStore.json","", 'utf8', function (err) {
                if (err) {
                    console.log('Some error occured - file either not saved or corrupted file saved.');
                } else{
                    console.log('It\'s saved!');
                }
            });

            //write contents back to file
            fs.writeFileSync("./storage/employeeStore.json",temp, 'utf8', function (err) {
                if (err) {
                    console.log('Some error occured - file either not saved or corrupted file saved.');
                } else{
                    console.log('It\'s saved!');
                }
            });
        });
    })
})

/*

 collection.hotels = JSON.parse(fs.readFileSync('./hotelCollection.json', 'utf8'));
        //return list of hotels
        res.send(collection.hotels)


        fs.writeFileSync('./hotelCollection.json',collection.toJSON(), 'utf8', function (err) {
            if (err) {
                console.log('Some error occured - file either not saved or corrupted file saved.');
            } else{
                console.log('It\'s saved!');
            }
            });

*/