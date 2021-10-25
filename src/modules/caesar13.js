function ceasar13(message) {}

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
