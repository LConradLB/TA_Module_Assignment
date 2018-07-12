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
            var temp = fs.readFileSync('./employeeStore.json', 'utf8')

            //wipe file
            fs.writeFileSync('./employeeStore.json',"", 'utf8', function (err) {
                if (err) {
                    console.log('Some error occured - file either not saved or corrupted file saved.');
                } else{
                    console.log('It\'s saved!');
                }
            });

            //create employee
            var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)
            employee.makeBooking("2018-09-01","2018-09-05")
            //add employee to file
            EmployeeStore.save(employee.toJSON(), '../employeeStore.json')

            //read file .load() and compare contents to expectation
            expect(EmployeeStore.load('../employeeStore.json')).to.eql(employee.toJSON())

            //wipe file
            fs.writeFileSync('../employeeStore.json',"", 'utf8', function (err) {
                if (err) {
                    console.log('Some error occured - file either not saved or corrupted file saved.');
                } else{
                    console.log('It\'s saved!');
                }
            });

            //write contents back to file
            fs.writeFileSync('../employeeStore.json',temp, 'utf8', function (err) {
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