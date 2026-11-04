const main_section = document.querySelector("#main_section");

const title = document.createElement("h1");
title.innerText = "This is a title";

const paragraph = document.createElement("p");
paragraph.innerHTML = `This is an <u>underlined</u> text`;
main_section.appendChild(title);
main_section.appendChild(paragraph);

console.log(title.innerText);
console.log(paragraph.innerText);