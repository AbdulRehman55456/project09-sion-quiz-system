#! /usr/bin/env node
import inquirer from "inquirer";

const sion = await inquirer.prompt([
  {
    name: "sion",
    type: "input",
    message: "please enter your name",
  },
]);

const toji = await inquirer.prompt([
  {
    name: "sion",
    type: "input",
    message: "please enter your roll number to start the test",
  },
]);

const quiz: {
  question_01: string;
  question_02: string;
  question_03: string;
  question_04: string;
  question_05: string;
} = await inquirer.prompt([
  {
    name: "question_01",
    type: "list",
    message:
      "Which of the following is a valid way to declare a variable in TypeScript?",
    choices: [
      "let x:number = hello",
      " var x = 10",
      "const x: number",
      "int x = 5",
    ],
  },
  {
    name: "question_02",
    type: "list",
    message: "What is the purpose of the `never` type in TypeScript?",
    choices: [
      " It represents the absence of any value",
      "It represents values that will never occur",
      "It is used for variables that can hold any type of value",
      "It is used to declare variables that are optional.",
    ],
  },
  {
    name: "question_03",
    type: "list",
    message:
      " Which TypeScript feature allows you to create a new type by combining multiple existing types?",
    choices: ["Union Types", "Intersection types", "Generics", "Type Aliases"],
  },
  {
    name: "question_04",
    type: "list",
    message:
      "Which TypeScript feature ensures that a variable can hold values of only one specified type at a time?",
    choices: ["Type Aliases", "Type Assertions", "Union Types", "Enums"],
  },
  {
    name: "question_05",
    type: "list",
    message: "What is the use of the `?` operator in TypeScript?",
    choices: [
      "It denotes a required property in an interface.",
      "It denotes an optional property in an interface.",
      " It denotes a required method in a class.",
      "It denotes a private property in a class.",
    ],
  },
]);

let score: number = 0;

switch (quiz.question_01) {
  case " var x = 10":
    console.log("1. correct!");
    ++score;
    break;
  default:
    console.log("1. incorrect");
}

switch (quiz.question_02) {
  case "It represents values that will never occur":
    console.log("2. correct!");
    ++score;
    break;
  default:
    console.log("2. incorrect");
}

switch (quiz.question_03) {
  case "Intersection types":
    console.log("3. correct!");
    ++score;
    break;
  default:
    console.log("3. incorrect");
}

switch (quiz.question_04) {
  case "Type Aliases":
    console.log("4. correct!");
    ++score;
    break;
  default:
    console.log("4. incorrect");
}

switch (quiz.question_05) {
  case "It denotes an optional property in an interface.":
    console.log("5. correct!");
    ++score;
    break;
  default:
    console.log("5. incorrect");
}

console.log(`score ${score}`);
