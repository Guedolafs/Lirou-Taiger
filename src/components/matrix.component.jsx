import React, { useEffect } from 'react';
import './matrix.component.css';

function getRandomCharacter() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return characters[Math.floor(Math.random() * characters.length)];
}

function MatrixRain() {
  useEffect(() => {
    const matrixContainer = document.querySelector('.matrix-container');

    const createCharacters = () => {
      const characterCount = 30; // Altere o valor para a quantidade desejada de caracteres em cada intervalo

      for (let i = 0; i < characterCount; i++) {
        const character = document.createElement('span');
        character.innerText = getRandomCharacter();
        character.style.left = Math.random() * window.innerWidth + 'px';
        character.style.animationDuration = Math.random() * 3 + 2 + 's';
        character.style.opacity = Math.random();
        character.style.fontSize = Math.random() * 20 + 10 + 'px';

        matrixContainer.appendChild(character);

        setTimeout(() => {
          character.remove();
        }, 5000);
      }
    };

    const interval = setInterval(createCharacters, 150); //

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="matrix-container"></div>
  );
}

export default MatrixRain;
