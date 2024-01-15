import React from 'react'
import { useGameContext } from '../hooks/useGameContext'

/**
 * Esse componente é responsável por renderizar as dificuldades
 * e atulaizar o estado da dificuldade
 */
function Dificuldades() {
  const {dificuldade, storageDificuldade} = useGameContext()
  
  return (
    <div>
        <select value={dificuldade} onChange={(e) => {
            storageDificuldade(e.target.value)
        }}>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
        </select>
    </div>
  )
}

export default Dificuldades