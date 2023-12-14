import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Problema from '../components/Problema'
import Pontuacao from '../components/Pontuacao'
import Countdown from '../components/Countdown'
import FimDeJogo from '../components/FimDeJogo'

function Multi({dataGame, dificuldade}) {

  useEffect(() => {
    // Chama a função para gerar novos números apenas uma vez
    dataGame.reiniciar('multi', dificuldade)
    dataGame.setTipo('multi')
    // dataGame.setTimeEnded(false)
  }, []);

  if (!dataGame.timeEnded) {
    return (
      <div className="row">
        <div className='col-md-12 col-sm-12'>
          <div className='countdown'>
            <Countdown setTimeEnded={dataGame.setTimeEnded} time={dataGame.tempo}/>
          </div>
          <Problema tipo='multi' n1={dataGame.numeros[0]} n2={dataGame.numeros[1]} />
          <input autoFocus onKeyDown={(e) => dataGame.enviar(e.key, 'multi', dificuldade)} type="text" onChange={ (e) => dataGame.setResposta(e.target.value)} value={dataGame.resposta}/>
          <Pontuacao acertou={dataGame.acertou} acertos={dataGame.acertos} erros={dataGame.erros} />
        </div>
        <div className="col-md-12 col-sm-12 mb-4">
            <Link className='jogar btn-primary' style={{display: 'inline-block'}} to={'/'}>Menu Principal</Link>
        </div>
      </div>
      
    )
  }else{
    return (
      <div className="row">
        <div className='col-md-12 col-sm-12'>
          <FimDeJogo acertos={dataGame.acertos} erros={dataGame.erros}  totalProblemas={dataGame.totalProblemas} reiniciar={() => dataGame.reiniciar('multi', dificuldade)} time={15}/>
        </div>
      </div>
      
    )
  }
}

export default Multi