/*

Write a utility class that exposes two methods:
EmployeeStore.save(employee)​ should take an instance of Employee​ and append all of its data to a file on disk.
EmployeeStore.load()​ should read this file and return an array of Employee​ objects.
You should think carefully about how to test these methods - it may make sense to test them both together.

*/

const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;

var Booking = require('../lib/employeeStore.js')