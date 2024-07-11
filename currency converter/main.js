#! /usr/bin/env node
import inquirer from "inquirer";
const currencies = {
    USD: 1, //base value                 All values in currencies are set in relation to usd,
    PKR: 278.16,
    INR: 83.51, //                       Basically,
    KWD: 0.31, //                  1 usd = 0.31 kwd     -  -  -  -  from
    EURO: 0.92, //                 1 usd = 0.92 euro    -  -  -  -  entered amount
    GBP: 0.78, //                  So,      0.31/0.92 = 1 usd   or   0.92/0.31 = 1usd
};
let converter = await inquirer.prompt([
    {
        name: "currency_from",
        message: "Enter currency to be converted: ",
        type: "list",
        choices: [
            { value: "USD" },
            { value: "PKR" },
            { value: "INR" },
            { value: "KWD" },
            { value: "EURO" },
            { value: "GBP" },
        ],
    },
    {
        name: "currency_into",
        message: "Enter currency to be converted into: ",
        type: "list",
        choices: [
            { value: "USD" },
            { value: "PKR" },
            { value: "INR" },
            { value: "KWD" },
            { value: "EURO" },
            { value: "GBP" },
        ],
    },
    { name: "amount", message: "Enter amount: ", type: "number" },
]);
let from = currencies[converter.currency_from];
let into = currencies[converter.currency_into];
let amount = converter.amount;
let into_base_usd = amount / from; // This is use of above comment.
let converted_amount = into * into_base_usd;
console.log(`The amount in ${converter.currency_into} is ${converted_amount}`);
