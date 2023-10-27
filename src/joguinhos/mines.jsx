import React, { useState, useEffect } from 'react';
import './mines.css';

function Mines() {
  const [matriz, setMatriz] = useState([]);

  // Função para criar uma matriz 5x5 com 4 minas em posições aleatórias
  const criarMatriz = () => {
    const novaMatriz = Array(5)
      .fill()
      .map(() =>
        Array(5)
          .fill()
          .map(() => ({
            mina: false,
          }))
      );

    // Coloque 4 minas em posições aleatórias
    for (let i = 0; i < 4; i++) {
      let randomRow, randomCol;
      do {
        randomRow = Math.floor(Math.random() * 5);
        randomCol = Math.floor(Math.random() * 5);
      } while (novaMatriz[randomRow][randomCol].mina);
      novaMatriz[randomRow][randomCol].mina = true;
    }

    setMatriz(novaMatriz);
  };

  useEffect(() => {
    criarMatriz();
  }, []);

  return (
    <div className="App">
      <h1>Jogo da Mina</h1>
      <button onClick={criarMatriz}>Reiniciar Jogo</button>
      <div className="matriz">
        {matriz.map((linha, rowIndex) => (
          <div className="linha" key={rowIndex}>
            {linha.map((celula, celulaIndex) => (
              <div
                className={`celula ${celula.mina ? 'mina' : ''}`}
                key={celulaIndex}
              >
                {celula.mina ? '💣' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mines;
