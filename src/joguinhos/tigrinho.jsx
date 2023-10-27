import React, { useState } from 'react';

function Tigrinho() {
  const [numero, setNumero] = useState(null);
  const [aposta, setAposta] = useState(null);

  // Função para gerar um número aleatório entre 1 e 10
  const gerarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    setNumero(numeroAleatorio);

    // Verifique se o número gerado é par ou ímpar
    if (numeroAleatorio % 2 === 0) {
      setAposta('Apostar');
    } else {
      setAposta('Não Apostar');
    }
  };

  return (
    <div className="App">
      <h1>Gerador de Números Aleatórios</h1>
      <button onClick={gerarNumeroAleatorio}>Gerar Número</button>
      {numero !== null && (
        <div>
          <p>Decisão: {aposta}</p>
        </div>
      )}
    </div>
  );
}

export default Tigrinho;
