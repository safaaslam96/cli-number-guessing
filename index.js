import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.guessNumber === randomNumber) {
    console.log("Very good! You  did it");
}
else {
    console.log("You guess wrong number");
}
