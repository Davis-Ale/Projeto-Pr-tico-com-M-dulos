import calculate from "./calculate.js";
import copytocliboard from "./copytocliboard.js";
import { handleButtonPress, handleClearButton, handleTyping } from "./keyhandlers.js";
import themeswitcher from "./themeswitcher.js";

const input = document.getElementById("input");
const resultInput = document.getElementById("result");


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClearButton);

document.getElementById("input").addEventListener("keydown", handleTyping );

document.getElementById("equal").addEventListener("click", calculate);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copytocliboard);

document.getElementById("themeSwitcher").addEventListener("click" ,themeswitcher);
