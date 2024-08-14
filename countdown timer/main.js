import { number } from "@inquirer/prompts";
import { differenceInSeconds } from "date-fns";
let input = (await number({ message: "Enter time: " }));
function timer(value) {
    let normalTime = new Date();
    let change = new Date().setSeconds(normalTime.getSeconds() + value + 1); // the input time is added to the normalTime but it is not in any format right now, only numbers
    let newTime = new Date(change);
    setInterval(() => {
        let normalTim = new Date();
        let diff = differenceInSeconds(newTime, normalTim);
        if (diff <= 0 || input == undefined) {
            process.exit(0);
        }
        let minutes = Math.floor(diff / 60);
        let seconds = Math.floor(diff % 60);
        console.log(`${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`);
    }, 1000);
}
timer(input);
