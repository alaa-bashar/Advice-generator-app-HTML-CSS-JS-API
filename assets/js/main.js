// Selecting all elements that will be needed
let adviceId = document.querySelector(".advice-id");
let adviceQ = document.querySelector(".advice-text q");
let generateBtn = document.querySelector(".generate-btn");
let loadingCircle = document.querySelector(".loading .circle");

// Generating an advice when window is loaded
window.onload = generateAdvice();

// Generating an advice when the button is clicked
generateBtn.addEventListener("click", generateAdvice);

// Function the generates an advice using the "advice slip API"
function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => {
      myData = result.json();
      return myData;
    })
    .then((myData) => {
      return myData["slip"];
    })
    .then((slip) => {
      loadingCircle.style.cssText = `display: block;`;
      adviceQ.style.cssText = `display: none;`;
      setTimeout(function () {
        loadingCircle.style.cssText = `display: none;`;
        adviceQ.style.cssText = `display: block;`;
        adviceId.textContent = slip.id;
        adviceQ.textContent = slip.advice;
      }, 1000);
    });
}
