
var fs = require('fs')
class EmployeeStore{
    static load(file){
        return fs.readFileSync(file, 'utf8')
    }

    static save(contents, filePath){
        EmployeeStore._checkJSONFileSyntax(filePath)
        var temp = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
        temp.employees.push(contents)
        
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
        if(input == ""){
            fs.writeFileSync(filePath,'{"employees":[]}', 'utf8', function (err) {
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

