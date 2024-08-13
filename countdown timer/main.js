#! /usr/bin/env node
import { number, select } from "@inquirer/prompts";
let formate = await select({
    message: "Minutes or Seconds?",
    choices: [{ value: "Minutes" }, { value: "Seconds" }],
});
let seconds = new Date().getSeconds();
let mins = new Date().getMinutes();
if (formate === "Seconds") {
    let inputSec = (await number({
        message: "Enter time in seconds: ",
    }));
    function timer() {
        if (inputSec == undefined) {
            process.exit(0);
        }
        console.log(inputSec);
        let sum = inputSec + seconds;
        setInterval(() => {
            inputSec--;
            sum--;
            console.log(inputSec);
            if (sum == seconds) {
                process.exit(0);
            }
        }, 1000);
    }
    timer();
    //             THE FOLLOWING IS DONE WITHOUT USING "DATE"
    //   console.log(inputSec);
    //   setInterval(() => {
    //     inputSec--;
    //     console.log(inputSec);
    //     if (inputSec == 0) {
    //       process.exit(0);
    //     }
    //   }, 1000);
}
else if (formate === "Minutes") {
    let inputMin = (await number({
        message: "Enter time in minutes: ",
    }));
    let inputSec = (await number({
        message: "Enter time in seconds: ",
    }));
    function timer() {
        if (inputMin == undefined && inputSec == undefined) { //   if seconds and minutes are undefined
            inputMin = 0;
            inputSec = 0;
            process.exit(0);
        }
        console.log(`${inputMin} : ${inputSec}`);
        setInterval(() => {
            if (inputMin == 0) { // if input minutes are undefined, only seconds are counted down
                let sum = inputSec + seconds;
                inputSec--;
                sum--;
                console.log(`${inputMin} : ${inputSec}`);
                if (sum == seconds) {
                    process.exit(0);
                }
            }
            else if (inputMin > 0) {
                let sumSec = inputSec + seconds;
                let sumMin = inputMin + mins;
                inputSec--;
                sumSec--;
                console.log(`${inputMin} : ${inputSec}`);
                if (inputSec == 0) {
                    inputMin--; // if input seconds hit zero, one minute has passed
                    inputSec = 60;
                }
            }
        }, 1000);
    }
    timer();
}
