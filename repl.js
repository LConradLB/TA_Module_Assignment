const Booking = require("./models/Booking");
const Employee = require("./models/Employee");
const employeeStore = require("./lib/employeeStore");


const repl = require("repl").start({

    useColors:true,
    terminal:true
})

repl.context.Booking = Booking;
repl.context.Employee = Employee;
repl.context.employeeStore = employeeStore;
