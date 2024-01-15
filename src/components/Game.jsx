import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Problema from '../components/Problema'
import Pontuacao from '../components/Pontuacao'
import Countdown from '../components/Countdown'
import FimDeJogo from '../components/FimDeJogo'
import { useGameContext } from '../hooks/useGameContext'
import Input from './Input'

/**
 * 
 * Este componente é responsável por renderizar o jogo
 * com base no tipo de operação e dificuldade escolhida
 */
function Game({tipo}) {
  
  const context = useGameContext()
  const [loadingGame, setLoadingGame] = useState(true)
  /**
   * Esse useEffect faz com que quando o componente for montado
   * ele reinicia o jogo, gerando novos números
   * além de definir o tipo de operação
  */
  useEffect(() => {
    context.reiniciar(tipo)
    setLoadingGame(false)
    // context.setTipo(tipo)
  }, []);

  // const handleResposta = (key) =>{
  //   context.setResposta(respostaInput)
  //   context.enviar(key)
  // }


    if (context.loading && loadingGame) {
      return <h1>Loading...</h1>
    }else{
      if (!context.timeEnded) {
      /**
       * Se o tempo não tiver acabado, renderiza o jogo
       */
      console.log(context)
      return (
        <div className="row">
          <div className='col-md-12 col-sm-12'>
            <div className='countdown'>
              <Countdown />
            </div>
              <Problema />
            {/* <input autoFocus onKeyDown={console.log('show')} type="text" onChange={ (e) => context.setResposta(e.target.value)} value={context.resposta}/> */}
            <Input tipo={tipo}/>
            <Pontuacao />
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
            <FimDeJogo tipo={tipo}/>
          </div>
        </div>
      )
    }
  }
}

export default Game