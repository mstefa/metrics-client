const colors = [
  'rgba(255, 235, 239, 1)',
  'rgba(255, 93, 126, 1)',
  'rgba(255, 223, 205, 1)',
  'rgba(230, 246, 247, 1)',
  'rgba(156, 218, 222, 1)',
  'rgba(106, 199, 206, 1)',
  'rgba(57, 181, 190, 1)',
  'rgba(7, 162, 173, 1)',
  'rgba(6, 131, 140, 1)',
]

function createOneDigitHash(inputString: string): number {
  // Calculate the sum of character codes
  const charCodesSum = inputString.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);

  // Reduce the sum to a single digit
  const singleDigitHash = charCodesSum % 9;

  // Ensure the result is a positive single-digit number
  return singleDigitHash < 0 ? singleDigitHash + 9 : singleDigitHash;
}

export function colorPicker(string: string): string {
  return colors[createOneDigitHash(string)];
}
