#! /usr/bin/env node
import inquirer from "inquirer";
let id = Math.floor(Math.random() * 100000 + 5000);
console.log("\t\tWelcome to IT Awareness Campaign.\n");
const welcome = await inquirer.prompt({
    name: "confirmation",
    message: "Would you like to enroll?",
    type: "confirm",
});
if (welcome.confirmation == true) {
    console.log("\t\tGlad to have you!!\n");
    let student = await inquirer.prompt([
        { name: "Name", message: "Enter name: ", type: "input" },
        { name: "fname", message: "Enter Father's Name : ", type: "input" },
        {
            name: "course",
            message: "Select course: ",
            type: "list",
            choices: [
                { value: "Artificial Intelligence" },
                { value: "Cybersecurity" },
                { value: "Web Development" },
                { value: "Copywriting" },
                { value: "Blockchain" },
                { value: "Data Analysis" },
            ],
        },
    ]);
    let courses = {
        "Artificial Intelligence": 4500,
        Cybersecurity: 4000,
        "Web Development": 3000,
        Copywriting: 4000,
        Blockchain: 3500,
        "Data Analysis": 2500,
    };
    console.log(`\n${student.course} course costs ${courses[student.course]} Rs per month.\n`);
    let payment = await inquirer.prompt({
        name: "method",
        message: "Select method of payment",
        type: "list",
        choices: [{ value: "Easypaisa" }, { value: "JazzCash" }],
    });
    console.log(`\nTotal amount to be paid: ${courses[student.course]} Rs.\n`);
    let pay = await inquirer.prompt({
        name: "amount",
        message: "Enter Amount: ",
        type: "number",
    });
    if (pay.amount == courses[student.course]) {
        console.log(`\nAn amount of ${pay.amount} was recieved. \nApplication accepted.`);
        let studentid = {
            name: student.Name,
            fname: student.fname,
            idnum: id,
            course: student.course,
        };
        console.log("\nHere is your ID card.\n");
        console.log("Name: ", studentid.name);
        console.log("Father's Name: ", studentid.fname);
        console.log("ID: ", studentid.idnum);
        console.log("Course Enrolled: ", studentid.course);
    }
    else if (pay.amount > courses[student.course]) {
        let transaction = pay.amount - courses[student.course];
        console.log(`An amount of ${pay.amount} was recieved. ${pay.amount - courses[student.course]} Rs were sent back. Application accepted.`);
        let studentid = {
            name: student.Name,
            fname: student.fname,
            idnum: id,
            course: student.course,
        };
        console.log("\nHere is your ID card.\n");
        console.log("Name: ", studentid.name);
        console.log("Father's Name: ", studentid.fname);
        console.log("ID: ", studentid.idnum);
        console.log("Course Enrolled: ", studentid.course);
    }
    else if (pay.amount < courses[student.course]) {
        console.log("The amount is insufficient. " + pay.amount + " Rs were sent back.");
    }
}
else {
    console.log("No problem.");
}
