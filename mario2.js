//Mario pyramid
function pyramid() {
    let height = 8;
    for(let i = 1; i <= height; i++) {
        let space = ' '.repeat(height - i);
        let hash = '#'.repeat(i);
        console.log(space + hash + '  ' + hash);
    }
}

pyramid();