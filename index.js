#!/usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.green("enter your sentence counter:")
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(chalk.magenta(`your sentence word counter${words.length}`));
