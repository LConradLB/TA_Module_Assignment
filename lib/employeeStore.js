
var fs = require('fs')
class EmployeeStore{
    static load(file){
        return fs.readFileSync(file, 'utf8')
    }

    static save(contents, filePath){
        EmployeeStore._checkJSONFileSyntax(filePath)
        var temp = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        console.log("temp employees", temp.employees)
    
        temp.employees.push(JSON.stringify(contents))
        console.log("new temp",temp)
        
        //wipe file
        fs.writeFileSync(filePath,JSON.stringify(temp), 'utf8', function (err) {
            if (err) {
                console.log('Some error occured - file either not saved or corrupted file saved.');
            } else{
                console.log('It\'s saved!');
            }
        });
    }

    static _checkJSONFileSyntax(filePath){
        var input = fs.readFileSync(filePath, 'utf8')
        if(input == "" || input == undefined || input == null){
            fs.writeFileSync(filePath,"[]", 'utf8', function (err) {
                if (err) {
                    console.log('Some error occured - file either not saved or corrupted file saved.');
                } else{
                    console.log('It\'s saved!');
                }
            });
        }
    }
}

module.exports = EmployeeStore


/*

e = new Employee("E123","W Po", "a@w",30)
e2 = new Employee("R234","J Mp", "a@w",30)
employeeStore.save(e, "./storage/employeeStore.json")
employeeStore.save(e2, "./storage/employeeStore.json")

*/