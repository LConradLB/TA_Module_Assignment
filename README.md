# Testing & Automation Assignment

## Setup

The file requires some npm libraries to run. Be sure to run ``` npm install``` to retieve the required packages.

The file where you store your list of employees will need to have the following initial line : ``` {"employees":[]} ``` or alternatively call ``` employeeStore._checkJSONFileSyntax(<file path>)``` - this method will set up the file with the required line.

### Running The File
You can run the file from your terminal but moving to the directory where the files are stored and running the following command: ``` node repl.js```

### Tests
Upon cloning the repo, make sure to run the tests to make sure that all the files are working on your system. You can run them by running the following command: ``` npm test```

##Classes
### Booking Class
The Booking class is instantiated with the following arguements; Start date of the booking & end date of the booking.  
  
It has the following methods avaiable:  
```numberOfDays()``` - This will return the length of the booking.  
```isAuthorised()``` - This will return the authorisation status of the booking.  
```authorisedBy()``` - This will return the authorisor of the booking.  
```authorisedOn()``` - This will return the date of that the booking was authorised on.  
```authorise(personel, <optionalDate>)``` - This will authorise the booking, where 'personel' is the authorisor.  
  

### Employee Class  
The Employee class is instantiated with the following arguements; Payroll number, Name, Email address & Holiday allowance.  
  
It has the following methods avaiable:  
```bookings()``` - This will return an array of all bookings made by the employee.  
```daysRemaining()``` - This will return the amount of days that the employee has left to take.  
```daysBooked()``` - This will return how many days the employee has booked off.  
```daysBookedAndAuthorised()``` - This will return the number of days that have been booked off and that have been authorised.  
```makeBooking(startDate, endDate)``` - This will create a booking for the employee from the start day to the end date (inclusive).  
```futureBookings(<returnOnlyAuthorised>)``` - This returns all future bookings and takes an optional boolean value to only return authorised bookings in the future.   
```pastBookings(returnOnlyAuthorised)``` - This returns all past bookings and takes an optional boolean value to only return past authorised bookings.   
  
### EmployeeStore Class
The methods in this class are static and as such, can be called directly.  
  
It has the following methods avaiable:  
```load(<file path>)``` - This will load a file from the specified file path.  
```save(contents, filePath)``` - This will save the contents passed in, to the specified file path.  