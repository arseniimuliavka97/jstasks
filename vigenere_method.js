/**
 * Vigenère Cipher Implementation in JavaScript
 *
 * This implementation includes functions to encrypt and decrypt text using the Vigenère cipher.
 * It handles both uppercase and lowercase letters and preserves non-alphabetic characters.
 */

/**
 * Encrypts plaintext using the Vigenère cipher.
 *
 * @param {string} plaintext - The text to encrypt.
 * @param {string} key - The keyword used for encryption.
 * @returns {string} The encrypted ciphertext.
 */
function vigenereEncrypt(plaintext, key) {
    let ciphertext = '';
    let keyIndex = 0;
    const keyLength = key.length;

    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        if (isLetter(char)) {
            const isUpper = char === char.toUpperCase();
            const plainCode = char.toUpperCase().charCodeAt(0) - 65;
            const keyChar = key[keyIndex % keyLength].toUpperCase();
            const keyCode = keyChar.charCodeAt(0) - 65;
            const cipherCode = (plainCode + keyCode) % 26;
            const cipherChar = String.fromCharCode(cipherCode + 65);
            ciphertext += isUpper ? cipherChar : cipherChar.toLowerCase();
            keyIndex++;
        } else {
            ciphertext += char; // Non-alphabetic characters are added unchanged
        }
    }

    return ciphertext;
}

/**
 * Decrypts ciphertext using the Vigenère cipher.
 *
 * @param {string} ciphertext - The text to decrypt.
 * @param {string} key - The keyword used for decryption.
 * @returns {string} The decrypted plaintext.
 */
function vigenereDecrypt(ciphertext, key) {
    let plaintext = '';
    let keyIndex = 0;
    const keyLength = key.length;

    for (let i = 0; i < ciphertext.length; i++) {
        const char = ciphertext[i];
        if (isLetter(char)) {
            const isUpper = char === char.toUpperCase();
            const cipherCode = char.toUpperCase().charCodeAt(0) - 65;
            const keyChar = key[keyIndex % keyLength].toUpperCase();
            const keyCode = keyChar.charCodeAt(0) - 65;
            const plainCode = (cipherCode - keyCode + 26) % 26;
            const plainChar = String.fromCharCode(plainCode + 65);
            plaintext += isUpper ? plainChar : plainChar.toLowerCase();
            keyIndex++;
        } else {
            plaintext += char; // Non-alphabetic characters are added unchanged
        }
    }

    return plaintext;
}

/**
 * Checks if a character is an alphabetic letter.
 *
 * @param {string} char - The character to check.
 * @returns {boolean} True if the character is a letter, false otherwise.
 */
function isLetter(char) {
    return /^[A-Za-z]$/.test(char);
}

// Example Usage
const plaintext = "Hello, World!";
const key = "KEY";

console.log("Plaintext:", plaintext);
console.log("Key:", key);

const encrypted = vigenereEncrypt(plaintext, key);
console.log("Encrypted:", encrypted);

const decrypted = vigenereDecrypt(encrypted, key);
console.log("Decrypted:", decrypted);
