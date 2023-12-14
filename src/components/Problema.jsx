import React from 'react'

/**
 * Esse componente é responsável por renderizar o problema
 * com base no tipo de operação
 */
function Problema({tipo, n1, n2}) {
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

export default Problema