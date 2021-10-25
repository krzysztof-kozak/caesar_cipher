function ceasar13(message) {
  if (typeof message !== "string") {
    return `The message must be a string. ${message} is not a string.`;
  }

  if (message.length === 0) {
    return `Empty strings are not allowed.`;
  }
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

export default ceasar13;
