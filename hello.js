const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (username) => {
    console.log(`hello, ${username}`);
    rl.close();
});

