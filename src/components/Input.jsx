import React, { useState } from 'react'
import { useGameContext } from '../hooks/useGameContext'

function Input({tipo}) {
    const context = useGameContext()
    const [respostaInput, setRespostaInput] = useState('')

    const handleResposta = (key) =>{
        if (key === 'Enter' && !context.loading) {
            context.enviar(respostaInput, tipo)
            setRespostaInput('')
        }
    }

    return (
        <input
            autoFocus
            onKeyDown={(e) => handleResposta(e.key)}
            type="text"
            onChange={ (e) => setRespostaInput(e.target.value)}
            value={respostaInput}
            disabled={context.timeEnded}
        />
    )
}

export default Input