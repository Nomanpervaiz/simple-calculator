import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstnumber" },
  { message: "Enter your first number", type: "number", name: "secondnumber" },
  {
    message: "Enter your operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log("Your value is " + (answer.firstnumber + answer.secondnumber));
} else if (answer.operator === "Substraction") {
  console.log("Your value is " + (answer.firstnumber - answer.secondnumber));
} else if (answer.operator === "Multiplication") {
  console.log("Your value is " + answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log("Your value is " + answer.firstnumber / answer.secondnumber);
} else {
  console.log("not valid number or operator");
}
