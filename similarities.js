//Finding text similarity on Javascript

function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 1; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        const indicator = a[j - 1] === b[i - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + indicator // substitution
        );
      }
    }
    return matrix[b.length][a.length];
  }
  const text1 = 'Hello';
  const text2 = 'Hallo';
  const similarity = 1 - (levenshteinDistance(text1, text2) / Math.max(text1.length, text2.length));
  console.log(similarity); // 0.8 (80% similarity)