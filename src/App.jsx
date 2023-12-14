import { useState } from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Game from './components/Game.jsx'

/**
 * Essa é a função que controla toda a lógia do jogo
 * sendo responsável por todas as funções e estados do jogo
 */
function App() {

  const [dificuldade, setDificuldade] = useState('facil')
  const [numeros, setNumeros] = useState([Math.ceil(Math.random() * 15), Math.ceil(Math.random() * 15)])
  const [resposta, setResposta] = useState("")
  const [acertou, setAcertou] = useState(true)
  const [erros, setErros] = useState(0)
  const [acertos, setAcertos] = useState(0)
  const [timeEnded, setTimeEnded] = useState(false)
  const [tipo, setTipo] = useState('')
  const [tempo, setTempo] = useState(30)
  const [totalProblemas, setTotalProblemas] = useState(1)

  const dificuldades = {
    adicao: {
      facil: 15,
      medio: 30,
      dificil: 50
    },
    subtracao: {
      facil: 30,
      medio: 45,
      dificil: 60
    },
    multi: {
      facil: 10,
      medio: 25,
      dificil: 35
    },
    divisao: {
      facil: [15, 10],
      medio: [20, 15],
      dificil: [35, 25]
    }
  }

  /**
   * Essa função é responsável por gerar os números aleatórios
   * com base no tipo de operaçao e dificuldade escolhida
   * além disso, ela incrementa o total de problemas gerados na partida
   * 
   */
  const gerarNumeros = (tipo, dificuldade = 'facil') => {
    setTotalProblemas((prevState) => prevState + 1)
    switch (tipo) {
      case 'adicao':
        return [Math.ceil(Math.random() * dificuldades.adicao[dificuldade]), Math.ceil(Math.random() * dificuldades.adicao[dificuldade])]
      case 'subtracao':
        return [Math.ceil(Math.random() * dificuldades.subtracao[dificuldade]), Math.ceil(Math.random() * dificuldades.subtracao[dificuldade])]
      case 'multi':
        return [Math.ceil(Math.random() * dificuldades.multi[dificuldade]), Math.ceil(Math.random() * dificuldades.multi[dificuldade])]
      case 'divisao':
        return [Math.ceil(Math.random() * dificuldades.divisao[dificuldade][0]), Math.ceil(Math.random() * dificuldades.divisao[dificuldade][1])]
      default:
        break;
    }
    
  }

  /**
   * Essa função é responsável por reiniciar o jogo
   * zerando os estados e gerando novos números
   * para que não sejam os mesmos valores da partida anterior
   */
  const reiniciar = (tipo, dificuldade = 'facil') => {
    setNumeros(gerarNumeros(tipo, dificuldade))
    setTotalProblemas(1)
    setResposta("")
    setAcertou(true)
    setErros(0)
    setAcertos(0)
    setTimeEnded(false)
  }

  /**
   * Essa função é responsável por calcular a resposta correta
   * com base no tipo de operação
   */
  const calculaResposta = (tipo) =>{
    switch (tipo) {
      case 'adicao':
        return numeros[0] + numeros[1]
      case 'subtracao':
        if (numeros[0] > numeros[1]) {
          return numeros[0] - numeros[1]
        }else{
          return numeros[1] - numeros[0]
        }
      case 'multi':
        return numeros[0] * numeros[1]
      case 'divisao':
        return numeros[1]
      default:
        break;
    }
  }

  /**
   * Essa função é responsável por enviar a resposta
   * e verificar se ela está correta ou não
   * além disso, ela atuliza os estados de acertos e erros
   */
  const enviar = (key, tipo, dificuldade = 'facil') =>{
    if (key === 'Enter') {
      const respostaCerta = calculaResposta(tipo)
      if(parseInt(resposta) == respostaCerta){
        //acertou
        setAcertou(true)
        setAcertos((prevState) => prevState + 1)
        setNumeros(gerarNumeros(tipo, dificuldade))
      }else{
        //errou
        setAcertou(false)
        setErros((prevState) => prevState + 1)
        setNumeros(gerarNumeros(tipo, dificuldade))
      }
      setResposta('')
    }
  }

  /**
   * Esse é o objeto que contém todos os estados e funções
   * que serão passados para os componentes filhos.
   * 
   * Não sei se é a melhor forma de fazer isso
   * mas foi a que eu consegui pensar
   */
  const dataGame = {
    numeros: numeros,
    setNumeros: setNumeros,
    resposta: resposta,
    setResposta: setResposta,
    acertou: acertou,
    setAcertou: setAcertou,
    erros: erros,
    setErros: setErros,
    acertos: acertos,
    setAcertos: setAcertos,
    tipo:tipo,
    setTipo: setTipo,
    tempo: tempo,
    setTempo: setTempo,
    totalProblemas: totalProblemas,
    setTotalProblemas: setTotalProblemas,
    timeEnded: timeEnded,
    setTimeEnded: setTimeEnded,
    reiniciar: reiniciar,
    enviar: enviar,
    gerarNumeros: gerarNumeros
  }

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home dificuldade={dificuldade} setDificuldade={setDificuldade} dataGame={dataGame}/>} />
        <Route path='/multi' element={<Game dataGame={dataGame} dificuldade={dificuldade} tipo='multi'/>} />
        <Route path='/adicao' element={<Game dataGame={dataGame} dificuldade={dificuldade} tipo='adicao'/>} />
        <Route path='/subtracao' element={<Game dataGame={dataGame} dificuldade={dificuldade} tipo='subtracao'/>}/>
        <Route path='/divisao' element={<Game dataGame={dataGame} dificuldade={dificuldade} tipo='divisao'/>}/>
      </Routes>
    </HashRouter>
  )
  
}

export default App