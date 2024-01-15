import React from 'react'
import { Link } from 'react-router-dom'
import { useGameContext } from '../hooks/useGameContext'

/**
 * Esse componente é responsável por renderizar o fim de jogo
 * além disso, ele calcula a média de acertos por segundo
 * e a porcentagem de acertos
 */
function FimDeJogo({tipo}) {
    const {acertos, erros, reiniciar} = useGameContext()
    const mediaAcertos = acertos/(acertos + erros)
    const pontuacaoFinal = (10 * acertos) - (5 * erros)
    return (
        <div className='row'>
            <div className='col-md-12 col-sm-12 mb-4'>
                <h2>{acertos > 0 ? `Você acertou ${acertos} problemas de um total de ${acertos + erros}` : `Você não acertou nenhum problema...`}</h2>
                <h2>{acertos > 0 ? `Sua porcentagem de acertos foi de ${(mediaAcertos * 100).toFixed(2)}%` : `Tente outra vez!`}</h2>
                <h2>Pontuação final: {pontuacaoFinal}
                {pontuacaoFinal > 0 ? ` 😎😎😎` : ` 😭😭😭`}
                </h2>
            </div>
            <div className="col-md-12 col-sm-12 mb-4">
                <button className='jogar btn-primary' onClick={() => reiniciar(tipo)}>Jogar de novo</button>
            </div>
            <div className="col-md-12 col-sm-12 mb-4">
                <Link className='jogar btn-primary' style={{display: 'inline-block'}} to={'/'}>Menu Principal</Link>
            </div>
            
        </div>
    )
}

export default FimDeJogo