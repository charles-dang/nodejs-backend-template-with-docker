"uses strict"
const readline = require('readline');
const fs = require('fs');
const path = require('path');

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
});
