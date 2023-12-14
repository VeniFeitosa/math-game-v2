import React from 'react'

/**
 * Esse componente é responsável por renderizar as dificuldades
 * e atulaizar o estado da dificuldade
 */
function Dificuldades({dificuldade, setDificuldade}) {
  return (
    <div>
        <select value={dificuldade} onChange={(e) => {
            setDificuldade(e.target.value)
        }}>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
        </select>
    </div>
  )
}

export default Dificuldades