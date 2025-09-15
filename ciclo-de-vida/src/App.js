import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Componente Montado!');

    return () => {
      console.log('Função de limpeza escutada, o contador será removido');
    };
  }, []); 

  useEffect(() => {
    document.title = `Contagem: ${contador}`;
    console.log('Componente atualizado ou montado, Novo valor de contador');
  }, [contador]); 

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Ciclo de Vida</h2>
      <p>O contador está em {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
