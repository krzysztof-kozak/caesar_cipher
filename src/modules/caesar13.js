function ceasar13(message) {
  if (typeof message !== "string") {
    return `The message must be a string. ${message} is not a string.`;
  }

  if (message.length === 0) {
    return `Empty strings are not allowed.`;
  }

  const alphabet = createAlphabet();
  const shift = 13;

  let encryptedMessage = "";
  for (const letter of message) {
    if (!alphabet.includes(letter.toLowerCase())) {
      encryptedMessage += letter;
    } else {
      encryptedMessage += shiftLetter(letter, alphabet, shift);
    }
  }

  return encryptedMessage;
}

function createAlphabet() {
  const a_code = 97;
  const z_code = 122;
  const alphabet = [];

  for (let i = a_code; i <= z_code; i++) {
    alphabet.push(String.fromCodePoint(i));
  }

  return alphabet;
}

function shiftLetter(letter, alphabet, shift) {
  const isUpperCase = letter === letter.toUpperCase();

  const index = alphabet.indexOf(letter.toLowerCase());
  const shiftedLetter = alphabet[(index + shift) % 26];

  return isUpperCase ? shiftedLetter.toUpperCase() : shiftedLetter;
}

export default ceasar13;
