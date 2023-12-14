import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Esse componente é responsável por renderizar o fim de jogo
 * além disso, ele calcula a média de acertos por segundo
 * e a porcentagem de acertos
 */
function FimDeJogo({acertos, erros, reiniciar, totalProblemas, time}) {
    const mediaAcertos = acertos/totalProblemas
    const mediaPorSegundo = acertos/time

    return (
        <div className='row'>
            <div className='col-md-12 col-sm-12 mb-4'>
                <h2>{acertos > 0 ? `Você acertou ${acertos} problemas de um total de ${totalProblemas}` : `Você não acertou nenhum problema...`}</h2>
                <h2>{acertos > 0 ? `Sua porcentagem de acertos foi de ${(mediaAcertos * 100).toFixed(2)}%` : `Tente outra vez!`}</h2>
                <h2>{acertos > 0 ? `Sua média de acertos por segundo foi de ${mediaPorSegundo.toFixed(2)}` : `Sem média de acertos`}</h2>
                <h2>Pontuação final: {(10 * acertos) - (5 * erros)}</h2>
            </div>
            <div className="col-md-12 col-sm-12 mb-4">
                <button className='jogar btn-primary' onClick={reiniciar}>Jogar de novo</button>
            </div>
            <div className="col-md-12 col-sm-12 mb-4">
                <Link className='jogar btn-primary' style={{display: 'inline-block'}} to={'/'}>Menu Principal</Link>
            </div>
            
        </div>
    )
}

export default FimDeJogo