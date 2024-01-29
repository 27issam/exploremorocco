document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("rot-btn-front").style.visibility =
      "visible";
    document.getElementById("rot-btn-back").style.visibility =
      "visible";
  
    document.getElementById("rot-btn-front").onclick = function () {
      document.querySelector(".card-inner").classList.toggle("is-flipped");
    };
  
    document.getElementById("rot-btn-back").onclick = function () {
      document.querySelector(".card-inner").classList.toggle("is-flipped");
    };
  });
  const cards = document.querySelectorAll('.card-inner'); 

function flipCard() {
  this.classList.toggle('is-flipped');
}

cards.forEach(card => card.addEventListener('click', flipCard));
