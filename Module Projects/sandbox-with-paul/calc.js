const fs = require('fs');
/**
 * we want a cli that takes in 3 arguments using process.argv for now---can switch to inquirier later 
 * ([add, sub, mult, divide], num1, num2) and prints the operation and its results to a text file
 * 
 */

// get user input (from process.argv for now)
let [,, operator, num1, num2] = process.argv // first 2 indexes are useless
// process user input -> add sub divc or mult?
function router(operation) {
    switch(operation) {
        case "add":
        case "addition":
            mathWriter(num1, num2, "+", (parseInt(num1) + parseInt(num2)));
            break;
        case "sub":
            mathWriter(num1, num2, "-", (parseInt(num1) - parseInt(num2)));
            break;
    }  
};

function mathWriter(num1, num2, operator, result) {
    fs.readFile("./output/Log.txt", "utf8", function(error, log) {
        let previousLog = ''
        if (error) {
            throw error
        }
        previousLog = log;

        let template = 
`${previousLog}
${Date.now()}
${num1} ${operator} ${num2} = ${result}

`
    writeThisThere(template, './output/Log.txt')
    });  
}

function writeThisThere(stuffToWrite, filePath) {
    fs.writeFile(filePath, stuffToWrite, function(err) { 
        if (err) throw err;
        console.log('file written successfully')
    })
};
    //print the operation and result to file
router(operator);