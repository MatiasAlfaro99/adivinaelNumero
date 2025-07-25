let secret_Number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const mensajeCambiado = function (mensaje) {
  document.querySelector('.message').textContent = mensaje;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // NINGÚN NÚMERO INGRESADO
  if (!guess) {
    mensajeCambiado('Ningún número ingresado 🥲');
  }
  // NÚMERO CORRECTO
  else if (guess === secret_Number) {
    mensajeCambiado('Adivinaste el número! 😁👍');
    document.querySelector('body').style.backgroundColor = '#60b347'; // verde
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret_Number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // NÚMERO INCORRECTO (guess !== secret_Number)
  else if (guess !== secret_Number) {
    if (score > 1) {
      mensajeCambiado(
        guess > secret_Number
          ? 'El número es mayor que el número secreto 🫥'
          : 'El número es menor que el número secreto 🫥'
      );
      score--;
      document.querySelector('.score').textContent = score; // Added '.' for class selector
    } else {
      mensajeCambiado('¡Perdiste el juego! 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// BOTÓN DE NUEVO (RESET)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_Number = Math.trunc(Math.random() * 20) + 1;
  mensajeCambiado('Empieza a adivinar...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#ff9a9e'; // Assuming this is your default background
});
