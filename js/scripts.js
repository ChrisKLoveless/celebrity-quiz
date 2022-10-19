
function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("George Clooney").setAttribute("class", "hidden");
  document.getElementById("Leonardo DeCaprio").setAttribute("class", "hidden");
  document.getElementById("Timothee Chalamet").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    if (age && height) {
      if (age >= 25 && height >= 50) {
        document.getElementById("George Clooney").removeAttribute("class");
        document.getElementById("Leonardo DeCaprio").removeAttribute("class");
        document.getElementById("Timothee Chalamet").removeAttribute("class");
      } else if (age <= 25 || age >= 18) {
        document.getElementById("Leonardo DeCaprio").removeAttribute("class");
        document.getElementById("Timothee Chalamet").removeAttribute("class");
      } else if (age === 18) {
        document.getElementById("Timothee Chalamet").removeAttribute("class");
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  };
};