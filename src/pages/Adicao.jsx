import React, { useState, useEffect } from 'react'
import App from '../App'
import { Link } from 'react-router-dom'
import Problema from '../components/Problema'
import Pontuacao from '../components/Pontuacao'
import Countdown from '../components/Countdown'
import FimDeJogo from '../components/FimDeJogo'
import { useGameContext } from '../hooks/useGameContext'

function Adicao() {

  const context = useGameContext()

  // useEffect(() => {
  //   // Chama a função para gerar novos números apenas uma vez
  //   // context.setNumeros(context.gerarNumeros('adicao', context.dificuldade ));
  //   context.reiniciar('adicao', context.dificuldade )
  //   context.setTipo('adicao')
  //   // context.setTimeEnded(false)
  // }, []);

  if (!context.timeEnded) {
    return (
      <div className="row">
        <div className='col-md-12 col-sm-12'>
          <div className='countdown'>
            <Countdown />
          </div>
          <Problema />
          <input autoFocus onKeyDown={(e) => context.enviar(e.key)} type="text" onChange={ (e) => context.setResposta(e.target.value)} value={context.resposta}/>
          <Pontuacao />
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
          <FimDeJogo />
        </div>
      </div>
      
    )
  }
    
}

export default Adicao