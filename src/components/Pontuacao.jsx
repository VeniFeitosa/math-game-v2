import React from 'react'

/**
 * Esse componente é responsável por renderizar a pontuação
 */
function Pontuacao({acertos, erros, acertou}) {
  return (
    <h2 className={acertou ? "": "incorreto"}>Pontuação: {(10 * acertos) - (5 * erros)}</h2>
  )
}

export default Pontuacao