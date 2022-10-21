import React, { useState, useEffect } from 'react'

import './Counter.css'

// useState Method
// useEffect Method

const Counter = () => {
  const [contador, setContador] = useState(0)
  const [teste, setTeste] = useState(123)

  useEffect(() => {
    console.log('ok, alterou o estado de "teste"')
  }, [teste])

  useEffect(() => {
    console.log('alterando o contador')
  }, [contador])

    const handleOnClick = operador => {
      const novoValor = operador === '+' 
      ? contador + 1
      : contador - 1

        setContador(novoValor)
    }

  return (
    <>
        <div className='Counter'>
            <span>{contador}</span>
            <button onClick={() => handleOnClick('-')}>-</button>
            <button onClick={() => handleOnClick('+')}>+</button>
            <button onClick={() =>setTeste(321)}>TESTE</button>
        </div>
    </>
  )
}

export default Counter