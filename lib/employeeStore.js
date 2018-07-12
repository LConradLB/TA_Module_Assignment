
var fs = require('fs')
class EmployeeStore{
    static load(file){
        return fs.readFileSync(file, 'utf8')
    }

    static save(contents, filePath){
        //EmployeeStore._checkJSONFileSyntax(file)
        var temp = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        console.log(temp)
        //wipe file
        fs.writeFileSync(filePath,JSON.stringify(contents), 'utf8', function (err) {
            if (err) {
                console.log('Some error occured - file either not saved or corrupted file saved.');
            } else{
                console.log('It\'s saved!');
            }
        });
    }

    static _checkJSONFileSyntax(filePath){
        if(fs.readFileSync(filePath, 'utf8') == ""){
            fs.writeFileSync(filePath,"{[]}", 'utf8', function (err) {
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