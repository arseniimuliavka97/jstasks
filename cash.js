
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cash() {
    let coins = 0;

    // Prompt the user for a valid input greater than or equal to 0
    rl.question("Change owed: ", (input) => {
        let dollars = parseFloat(input);

        if (dollars < 0 || isNaN(dollars)) {
            console.log("Please enter a valid number.");
            rl.close();
            return;
        }

        // Convert dollars to cents and round to avoid floating-point inaccuracies
        let cents = Math.round(dollars * 100);

        // Calculate the number of coins needed
        coins += Math.floor(cents / 25);
        cents %= 25;

        coins += Math.floor(cents / 10);
        cents %= 10;

        coins += Math.floor(cents / 5);
        cents %= 5;

        coins += Math.floor(cents / 1);

        // Output the result
        console.log(coins);
        rl.close();
    });
}

// Call the cash function to run the program
cash();
