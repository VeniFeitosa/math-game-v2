import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Problema from '../components/Problema'
import Pontuacao from '../components/Pontuacao'
import Countdown from '../components/Countdown'
import FimDeJogo from '../components/FimDeJogo'

/**
 * 
 * Este componente é responsável por renderizar o jogo
 * com base no tipo de operação e dificuldade escolhida
 */
function Game({dataGame, dificuldade, tipo}) {
    /**
     * Esse useEffect faz com que quando o componente for montado
     * ele reinicia o jogo, gerando novos números
     * além de definir o tipo de operação
     */
    useEffect(() => {
        dataGame.reiniciar(tipo, dificuldade)
        dataGame.setTipo(tipo)
      }, []);
    
    if (!dataGame.timeEnded) {
      /**
       * Se o tempo não tiver acabado, renderiza o jogo
       */
      return (
        <div className="row">
          <div className='col-md-12 col-sm-12'>
            <div className='countdown'>
              <Countdown setTimeEnded={dataGame.setTimeEnded} time={dataGame.tempo}/>
            </div>
            <Problema tipo={tipo} n1={dataGame.numeros[0]} n2={dataGame.numeros[1]} />
            <input autoFocus onKeyDown={(e) => dataGame.enviar(e.key, tipo, dificuldade)} type="text" onChange={ (e) => dataGame.setResposta(e.target.value)} value={dataGame.resposta}/>
            <Pontuacao acertou={dataGame.acertou} acertos={dataGame.acertos} erros={dataGame.erros} />
          </div>
          <div className="col-md-12 col-sm-12 mb-4">
              <Link className='jogar btn-primary' style={{display: 'inline-block'}} to={'/'}>Menu Principal</Link>
          </div>
        </div>
        
      )
    }else{
      /**
       * Se o tempo tiver acabado, renderiza o fim de jogo
       */
      return (
        <div className="row">
          <div className='col-md-12 col-sm-12'>
            <FimDeJogo acertos={dataGame.acertos} erros={dataGame.erros}  totalProblemas={dataGame.totalProblemas} reiniciar={() => dataGame.reiniciar(tipo, dificuldade)} time={dataGame.tempo}/>
          </div>
        </div>
        
      )
    }
}

export default Game