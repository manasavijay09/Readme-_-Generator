

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown= require('./generateMarkdown');


function init(){
inquirer.prompt([
    {
       type : "input",
       name:"title",
       message:"Enter your Project title"
    },
    {
        type : "input",
        name:"descri[tion",
        message:"Enter your Project description"
     },
     {
        type : "input",
        name:"installation",
        message:"Enter your Project instalation requirements"
     },
     {
        type : "input",
        name:"usage",
        message:"Enter your Project usage"
     },
     {
        type : "list",
        name:"Licence",
        message:"Enter your Project licence",
        choices:["MIT","ISC","GPL","APCHE","NONE"]
     },
     {
        type : "input",
        name:"Contributing",
        message:"Enter your Project Contributing guidelines",
       
     },
     {
        type : "input",
        name:"tests",
        message:"Enter your Project testing reuirements",
       
     },
     {
        type : "input",
        name:"github",
        message:"Enter your github username",
       
     },
     {
        type : "input",
        name:"email",
        message:"Enter your email id",
       
     },
     
]).then(response => {
    fs.writeFileSync("README", generateMarkdown(response),function(err,data){
        if(err) throw err
    })
    console.log("readmegenerator");
})
}