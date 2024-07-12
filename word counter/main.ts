#! /usr/bin/env node

import inquirer from "inquirer";

const paragraph = await inquirer.prompt(
    {name: "byUser", message: "Please type: ", type: "input"}
);

let para :string = paragraph.byUser;

let par = para.replaceAll(" ", "");
console.log("The total characters used are: "+par.length);

let words = para.trim().split(" ");
console.log("The total words used are: "+words.length);
