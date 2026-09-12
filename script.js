
const factButton = document.querySelector("#factButton");
const message = document.querySelector("#message");

let factNum = 0;

factButton.addEventListener("click", function () {
  if (factNum === 0) {
      message.textContent = "✦ The first computer 'bug' was a literal bug! (A moth stuck in a computer in 1947.)";
      factNum = 1;
  }
  else if (factNum === 1) {
      message.textContent = "✧ Tim Berners-Lee published the first website in 1991, and it's still accessible today! (http://info.cern.ch)";
      factNum = 2;
  }
  else if (factNum === 2) {
      message.textContent = "✦ The first computer algorithm was written by a woman, Ada Lovelace, in the 1800s!";
      factNum = 3;
  }
  else {
      message.textContent = "✧ The Internet weighs as much as a strawberry! Conceptually, the electrons moving through the internet at any given moment weigh about 50 grams. Yum!";
      factNum = 0;
  }
  
});
