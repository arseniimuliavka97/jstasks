// Luhn Algorithm
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Validates a number string using the Luhn algorithm.
 *
 * @param {string} numberStr - The number string to validate.
 * @returns {boolean} - Returns true if the number is valid according to the Luhn algorithm, false otherwise.
 */
function validateLuhn(numberStr) {
    // Remove all non-digit characters
    const sanitized = numberStr.replace(/\D/g, '');
    
    let sum = 0;
    let shouldDouble = false;
    
    // Iterate over the digits from right to left
    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized.charAt(i), 10);
        
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    
    // If the total modulo 10 is 0, the number is valid
    return sum % 10 === 0;
}

// Prompt the user for input
rl.question("Enter a number to validate (e.g., credit card number): ", function (userInput) {
    if (validateLuhn(userInput)) {
        console.log(`${userInput} is valid according to the Luhn algorithm.`);
    } else {
        console.log(`${userInput} is invalid according to the Luhn algorithm.`);
    }
    
    // Close the input stream
    rl.close();
});
