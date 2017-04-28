"uses strict"
const readline = require('readline');
const fs = require('fs');
const path = require('path');
APP_ROOT = path.resolve(__dirname);
package = require("../package.json");
console.log(">>>", path.resolve(__dirname));
console.log("package>>>",package);
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Get project description
const getDescription = function(callback) {
    input.question("What is the project description?", (projectDescription) => {
        project.description=projectDescription;
        callback(project);
    });
};

//Get project name
const getName = function(callback) {
    project={};
    input.question("What is the project name?", (projectName) => {
        getDescription(function(project){
            project.name=projectName;
            callback(project);
        });

});
};


const getInput = function(callback) {
    getName(function(project){
        callback(project);
    });
};

//Get input from user
getInput((project) => {
    console.log("Name=",project.name);
    console.log("Description=",project.description);
    input.close();

    package.name=project.name;
    package.description = project.description;

    //write back to package.json
    fs.writeFileSync(APP_ROOT + "/../package.json",JSON.stringify(package,0,2));
});

