#!usr/bin/env-node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow('lets start calculation');
    await sleep();
    rainbow.stop();
    console.log(chalk.blue(`
|  ___  |
 | | JO           0. | |
 | |___| |
 |  _ _ _   _  |
 | | 7 | 8 | 9 | | + | |
 | |||| || |
 | | 4 | 5 | 6 | | - | |
 | |||| || |
 | | 1 | 2 | 3 | | x | |
 | |||| || |
 | | . | 0 | = | | / | |
 | |||| || |
 |___|
`));
}
await welcome();
async function askQues() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "opreators",
            message: "which opreation do you perform?",
            choices: ["addition", "subtraction", "multiplication", "division"]
        },
        {
            type: "number",
            name: "num1",
            message: "enter name 1:"
        },
        {
            type: "number",
            name: "num2",
            message: "enter name 2:"
        }
    ])
        .then((ans) => {
        // console.log(ans)
        if (ans.opreators == 'addition') {
            console.log(`${ans.num1}+${ans.num2}= ${ans.num1 + ans.num2}`);
        }
        else if (ans.opreators == 'subtraction') {
            console.log(`${ans.num1}-${ans.num2}= ${ans.num1 - ans.num2}`);
        }
        else if (ans.opreators == 'multiplication') {
            console.log(`${ans.num1}*${ans.num1}=${ans.num1 * ans.num2}`);
        }
        else if (ans.opreators == 'division') {
            console.log(`${ans.num1}/${ans.num1}=${ans.num1 / ans.num2}`);
        }
    });
}
;
// askQues();
async function sagain() {
    do {
        await askQues();
        var abc = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "do you want to start again? press y or n"
        });
    } while (abc.restart === 'y' || abc.restart === 'Y' || abc.restart === 'yes');
    {
    }
}
sagain();