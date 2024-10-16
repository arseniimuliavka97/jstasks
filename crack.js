// 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function encrypt(key, plaintext) {
    let cipherText = "";

    for (let i = 0, j = 0; i < plaintext.length; i++) {
        if (/[a-zA-Z]/.test(plaintext[i])) { // Encrypt only letters
            const shift = key[j % key.length].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
            if (plaintext[i] >= 'A' && plaintext[i] <= 'Z') {
                cipherText += String.fromCharCode(((plaintext[i].charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
            } else {
                cipherText += String.fromCharCode(((plaintext[i].charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
            }
            j++; // Increment key counter only for letters
        } else {
            cipherText += plaintext[i]; // Print non-letter characters unchanged
        }
    }
    
    console.log("Cipher Text: " + cipherText);
}

function decrypt(key, ciphertext) {
    let decipheredText = "";

    for (let i = 0, j = 0; i < ciphertext.length; i++) {
        if (/[a-zA-Z]/.test(ciphertext[i])) { // Decrypt only letters
            const shift = key[j % key.length].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
            if (ciphertext[i] >= 'A' && ciphertext[i] <= 'Z') {
                decipheredText += String.fromCharCode(((ciphertext[i].charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0));
            } else {
                decipheredText += String.fromCharCode(((ciphertext[i].charCodeAt(0) - 'a'.charCodeAt(0) - shift + 26) % 26) + 'a'.charCodeAt(0));
            }
            j++; // Increment key counter only for letters
        } else {
            decipheredText += ciphertext[i]; // Print non-letter characters unchanged
        }
    }

    console.log("Deciphered Text: " + decipheredText);
}

function crack() {
    rl.question("Enter the key (only alphabetic characters): ", (key) => {
        // Key validation
        if (!/^[a-zA-Z]+$/.test(key)) {
            console.log("Key must only contain alphabetic characters.");
            rl.close();
            return;
        }

        let option;
        const options = `
        1. Encrypt
        2. Decrypt
        3. Exit
        `;

        const promptForOption = () => {
            rl.question(options + "Enter your option: ", (input) => {
                option = parseInt(input);
                switch (option) {
                    case 1:
                        rl.question("Enter the plaintext (up to 128 characters): ", (plaintext) => {
                            encrypt(key, plaintext);
                            promptForOption(); // Prompt for next option
                        });
                        break;
                    case 2:
                        rl.question("Enter the ciphertext: ", (ciphertext) => {
                            decrypt(key, ciphertext);
                            promptForOption(); // Prompt for next option
                        });
                        break;
                    case 3:
                        console.log("Exiting.");
                        rl.close();
                        return;
                    default:
                        console.log("\nInvalid selection! Try again.\n");
                        promptForOption(); // Prompt for next option
                        break;
                }
            });
        };

        promptForOption(); // Start the option prompt
    });
}

// Call the crack function to start the program
crack();

