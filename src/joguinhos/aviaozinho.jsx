import React from 'react';

function createRamdomNumberWith2DecimalCase(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function create3DiffRandomNumbers() {
  // Gerar um entre 1.01 e 1.50
  const firstNumber = createRamdomNumberWith2DecimalCase(1.01, 1.5);

  // Gerar um entre 2.5 e 3
  const secondNumber = createRamdomNumberWith2DecimalCase(2.5, 3);

  // Fazer a média dos dois
  const thirdNumber = ((parseFloat(firstNumber) + parseFloat(secondNumber)) / 2).toFixed(2);

  // Criar valores referência para os três números
  // Primeiro valor referência para o primeiro valor é entre 91 e 97
  const firstReferenceValue = Math.floor(
    createRamdomNumberWith2DecimalCase(91, 97)
  );
  const secondReferenceValue = Math.floor(
    createRamdomNumberWith2DecimalCase(51, 55)
    
  );
  const thirdReferenceValue = Math.floor(
    createRamdomNumberWith2DecimalCase(71, 79)
  );

  // firstReferenceValue% => firstNumber
  // secondReferenceValue% => secondNumber
  // thirdReferenceValue% => thirdNumber

  return [
    {
      reference: firstReferenceValue,
      value: firstNumber,
    },
    {
      reference: thirdReferenceValue,
      value: thirdNumber,
    },
    {
      reference: secondReferenceValue,
      value: secondNumber,
    },
  ];
}

function Aviaozinho() {
  const valoresAleatorios = create3DiffRandomNumbers();

  return (
    <div>
      {valoresAleatorios.map((valores, index) => (
        <div key={index}>
          <div>
            Probabilidade: {valores.reference}%
          </div>
          <div>
            Valor: {valores.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Aviaozinho;
