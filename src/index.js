import ceasar13 from "./modules/caesar13.js";

const input = document.querySelector(".input");
const encryptBtn = document.querySelector(".encryptBtn");
const encryptedMsg = document.querySelector(".encryptedMsg");

encryptBtn.addEventListener("click", encrypt);

function encrypt() {
  encryptedMsg.textContent = ceasar13(input.value);
}
