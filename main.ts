#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n ---- Welcome To Our Mini ATM Machine ----");
console.log("\n\t The Correct Pin Of ATM Machine Is '1234'\t\n");

let myBalance = 100000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name : "pin",
        type :"number",
        message : "Enter Your Pin!"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("\n\tCorrect Pin Code! \n");

    let operationAns = await inquirer.prompt([
        {
            name : "operation",
            type : "list",
            message : "Please Select Option",
            choices : ["Withdraw","Fast Cash","Check-Balance"]
        }
    ]);
    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name : "amount",
                type : "number",
                message : "Enter Your Amount",
            }
        ]);
    if (amountAns.amount > myBalance) {
            console.log("\n\t Insufficient Balance");
        }
    else { myBalance -= amountAns.amount;
        console.log(`\n\tYour Remaining Balance Is :  ${myBalance}`)
    }
    } else if(operationAns.operation === "Check-Balance"){
        console.log(`\n\tYour Balance Is : ${myBalance}`);

    } else if(operationAns.operation === "Fast Cash"){
        let fast = await inquirer.prompt([
            {
                name : "fastCash",
                type : "list",
                message : "Select The Amount Which You Withdrawal : ",
                choices : [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast.fastCash;
        console.log(`\n\tYou Have Successfully Withdrawal ${fast.fastCash}\n\tYour Remaining Balance Is : ${myBalance} `);
    } else {
    console.log("\n Incorrect Pin Code ");
    }
    }
console.log("\n ---- Thanks For Testing Our Project ---- \n");
