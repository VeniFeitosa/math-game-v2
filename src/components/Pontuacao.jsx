import React from 'react'
import { useGameContext } from '../hooks/useGameContext'

/**
 * Esse componente é responsável por renderizar a pontuação
 */
function Pontuacao() {
  const {acertos, erros, acertou} = useGameContext()
  return (
    <h2 className={acertou ? "": "incorreto"}>Pontuação: {(10 * acertos) - (5 * erros)}</h2>
  )
}

export default Pontuacao