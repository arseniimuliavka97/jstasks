const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function caesarCipher(plaintext, k) {
    let ciphertext = "";

    // Iterate through each character in the plaintext
    for (let i = 0; i < plaintext.length; i++) {
        let char = plaintext[i];

        // Check if the character is lowercase
        if (char >= 'a' && char <= 'z') {
            ciphertext += String.fromCharCode(((char.charCodeAt(0) - 'a' + k) % 26) + 'a');
        }
        // Check if the character is uppercase
        else if (char >= 'A' && char <= 'Z') {
            ciphertext += String.fromCharCode(((char.charCodeAt(0) - 'A' + k) % 26) + 'A');
        }
        // If it's not a letter, just append the character as it is
        else {
            ciphertext += char;
        }
    }

    return ciphertext;
}

function caesar() {
    const args = process.argv.slice(2);

    // Check if there is exactly one argument and if it is a number
    if (args.length === 1 && !isNaN(args[0])) {
        const k = parseInt(args[0]); // Get the Caesar cipher key as an integer

        // Ask the user for the plaintext
        rl.question("plaintext: ", (plaintext) => {
            const ciphertext = caesarCipher(plaintext, k); // Encrypt the plaintext with the key
            console.log("ciphertext: " + ciphertext); // Output the encrypted text
            rl.close();
        });
    } else {
        console.log("Usage: node caesar.js <key>");
        rl.close();
    }
}

// Run the main function to start the program
caesar();
