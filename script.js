const textArea = document.getElementById('text-area');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');

textArea.addEventListener('input', () => {
  const content = textArea.value.trim(); // Remove leading and trailing spaces

  // Count words
  const words = content.split(/\s+/).filter(word => word !== ''); // Split by whitespace, filter empty strings

  // Count characters
  const chars = content.length;

  wordCount.textContent = words.length;
  charCount.textContent = chars;
});
