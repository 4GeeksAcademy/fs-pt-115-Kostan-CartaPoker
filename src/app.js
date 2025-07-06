import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};
    const suits = ['♥', '♦', '♠', '♣']
    const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    // Elige aleatoriamente
  function generateCard (){
    const randomSuit = suits[Math.floor(Math.random() * suits.length)]
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]

    // Inserta en el HTML
    document.getElementById('top-suit').innerText = randomSuit
    document.getElementById('card-number').innerText = randomNumber
    document.getElementById('bottom-suit').innerText = randomSuit

    // Cambia color a rojo si es corazón o diamante
    if (randomSuit === '♥' || randomSuit === '♦') {
      document.getElementById('top-suit').classList.add('text-danger')
      document.getElementById('bottom-suit').classList.add('text-danger')
    } else {
      document.getElementById('top-suit').classList.add('text-dark')
      document.getElementById('bottom-suit').classList.add('text-dark')
    }
  }

    generateCard()

    // Boton para generar carta
     document.getElementById('new-card-btn').addEventListener('click', generateCard)

    // Temporizador para que se genere una carta automaticamente 
     setInterval(generateCard, 10000);

    // cambia el ancho y el alto de la carta 
      document.getElementById('sizeBtn').addEventListener('click', () => {
      const width = document.getElementById('width-input').value;
      const height = document.getElementById('height-input').value;

      const card = document.getElementById('card');

      if (width) {
        card.style.width = `${width}px`;
      }
      if (height) {
        card.style.height = `${height}px`;
      }
    });