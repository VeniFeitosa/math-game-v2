import React from 'react'
import { useGameContext } from '../hooks/useGameContext'

/**
 * Esse componente é responsável por renderizar o problema
 * com base no tipo de operação
 */
function Problema() {
  const {tipo, numeros, loading} = useGameContext()

  if (tipo === '' || loading) {
    return <h1>Loading...</h1>
  }else{
    let n1 = numeros[0]
    let n2 = numeros[1]

    switch (tipo) {
      case 'adicao':
        return (
          <h1 > {n1} + {n2} </h1>
        )
      case 'subtracao':
        if (n1 > n2) {
          return (
            <h1 > {n1} - {n2} </h1>
          )
        }else{
          return (
            <h1 > {n2} - {n1} </h1>
          )
        }
        
      case 'multi':
        return (
          <h1 > {n1} * {n2} </h1>
        )
      case 'divisao':
        return (
          <h1 > {n1 * n2} / {n1} </h1>
        )
      default:
        break;
    }
  }
  
}

export default Problema