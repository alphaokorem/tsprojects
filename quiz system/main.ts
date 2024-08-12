#! usr/bin/env node
import { select, input, confirm } from "@inquirer/prompts";
import chalk from "chalk";

// quiz system
// MCQs were selected randomly
let answers: string[] = [
  "b) a^2+2ab+b^2",
  "b) Newton",
  "c) Kidneys",
  "a) George Washington",
  "c) goes",
  "b) 180°",
  "a) H2O",
  "a) India",
  "b) William Shakespeare",
  "c) Keyboard",
];

let marks = 10;
let score = 0;

function checking(answer: string) {
  answers.forEach((i) => {
    if (answer === i) {
      score++;
    }
    // this function checks wether the choice selected by the user is the correct answer by checking each element in the answers array
  });
}

console.log(chalk.blue("BASIC MATRIC LEVEL QUIZ"));
console.log(chalk.blue(`  10 MCQS \n  10 Marks`));

let confirmation = await confirm({ message: "Start Quiz???" });
let name = await input({ message: "Enter candidate name: " });
while (name === "") {
    name = await input({ message: "Enter candidate name: " });
}

if (confirmation) {
  let q1 = await select({
    message: `Question: What is the value of (a+b)^2?`,
    choices: [
      { value: "a) a^2+b^2" },
      { value: "b) a^2+2ab+b^2" },
      { value: "c) a^2-2ab+b^2" },
      { value: "d) 2ab+b^2" },
    ],
  });
  checking(q1);

  let q2 = await select({
    message: `Question: Which of the following is a unit of force?`,
    choices: [
      { value: "a) Joule" },
      { value: "b) Newton" },
      { value: "c) Pascal" },
      { value: "d) Watt" },
    ],
  });
  checking(q2);

  let q3 = await select({
    message: `Question: Which organ is primarily responsible for the filtration of blood in the human body?`,
    choices: [
      { value: "a) Liver" },
      { value: "b) Heart" },
      { value: "c) Kidneys" },
      { value: "d) Lungs" },
    ],
  });
  checking(q3);

  let q4 = await select({
    message: `Question: Who was the first President of the United States?`,
    choices: [
      { value: "a) George Washington" },
      { value: "b) Thomas Jefferson" },
      { value: "c) Abraham Lincoln" },
      { value: "d) John Adams" },
    ],
  });
  checking(q4);

  let q5 = await select({
    message: `Question: Identify the correct form of the verb in the following sentence: "She ____ (go) to school every day."`,
    choices: [
      { value: "a) went" },
      { value: "b) going" },
      { value: "c) goes" },
      { value: "d) go" },
    ],
  });
  checking(q5);

  let q6 = await select({
    message: `Question: The sum of angles in a triangle is:`,
    choices: [
      { value: "a) 90°" },
      { value: "b) 180°" },
      { value: "c) 270°" },
      { value: "d) 360°" },
    ],
  });
  checking(q6);

  let q7 = await select({
    message: `Question: What is the chemical formula of water?`,
    choices: [
      { value: "a) H2O" },
      { value: "b) CO2" },
      { value: "c) O2" },
      { value: "d) NaCl" },
    ],
  });
  checking(q7);

  let q8 = await select({
    message: `Question: The Tropic of Cancer passes through which of the following countries?`,
    choices: [
      { value: "a) India" },
      { value: "b) Australia" },
      { value: "c) Argentina" },
      { value: "d) South Africa" },
    ],
  });
  checking(q8);

  let q9 = await select({
    message: `Question: Who is the author of the play "Romeo and Juliet"?`,
    choices: [
      { value: "a) William Wordsworth" },
      { value: "b) William Shakespeare" },
      { value: "c) Charles Dickens" },
      { value: "d) Jane Austen" },
    ],
  });
  checking(q9);

  let q10 = await select({
    message: `Question: Which of the following is an input device?`,
    choices: [
      { value: "a) Monitor" },
      { value: "b) Printer" },
      { value: "c) Keyboard" },
      { value: "d) Speaker" },
    ],
  });
  checking(q10);

  // function for percentage and storing percentage in a variable
  let percentage = (tot: number, obt: number) => {
    let result = (obt / tot) * 100;
    return result;
  };
  let perc = percentage(marks, score);

  // function for grading system
  let grade;
  function grading(perc: number) {
    if (perc >= 80) {
      grade = "A";
    } else if (perc >= 60 && perc < 80) {
      grade = "B";
    } else if (perc < 60) {
      grade = "C";
    }
  }
  grading(perc)

  console.log(`\n\n`);
  console.log(chalk.cyan("RESULT"));
  console.log(
    `Name: ${name}\nTotal marks: ${marks}\nObtained marks: ${score}\nPercentage: ${perc}%\nGrade: ${grade}`
  );
} else {
  console.log("\nQuiz not conducted.");
}
