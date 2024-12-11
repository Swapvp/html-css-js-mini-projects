let input = document.querySelector("#input");
let enteredText = document.querySelectorAll(".enteredText");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let camelcase = document.querySelector("#camelcase");
let pascalcase = document.querySelector("#pascalcase");
let snakecase = document.querySelector("#snakecase");
let trim = document.querySelector("#trim");
let kebabcase = document.querySelector("#kebabcase");

function textTransform({ text = input.value.trim() }) {
  const camelCase = text
    .toLowerCase()
    .split(" ")
    .reduce((a, b) => a + b[0]?.toUpperCase() + b.substring(1)?.toLowerCase());

  lowercase.textContent = text.toLowerCase();
  uppercase.textContent = text.toUpperCase();
  camelcase.textContent = camelCase;
  pascalcase.textContent = camelCase
    ? camelCase[0]?.toUpperCase() + camelCase.substring(1)
    : "";
  snakecase.textContent = text.split(" ").join("_");
  kebabcase.textContent = text.split(" ").join("-");
  trim.textContent = text.split(" ").join("");
}

input.addEventListener("input", textTransform);
textTransform({});
