import {React} from 'react'
import { Link } from 'react-router-dom'
import Dificuldades from '../components/Dificuldades'
function Home({dificuldade, setDificuldade, dataGame}) {
  return (
    <div className='container'>
        <div className="main row text-center">
            <div className="col-md-12 text-center">
                <h1>Jogo da Matemática</h1>
            </div>
            <div className="col-md-12 text-center texto">
                <div className='dificuldades mb-4'>
                    <label>Dificuldade: </label>
                    <Dificuldades dificuldade={dificuldade} setDificuldade={setDificuldade} dataGame={dataGame}/>
                </div>
            </div>
            <div className="col-md-12 col-sm-12">
                <div className="row">
                    <div className="col-md-12 col-sm-12 mb-4">
                        <Link className='btn btn-primary' to={'/multi'}>Multiplicação</Link>
                    </div>
                    <div className="col-md-12 col-sm-12 mb-4">
                        <Link className='btn btn-primary' to={'/divisao'}>Divisão</Link>
                    </div>
                    <div className="col-md-12 col-sm-12 mb-4">
                        <Link className='btn btn-primary' to={'/adicao'}>Adição</Link>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <Link className='btn btn-primary' to={'/subtracao'}>Subtração</Link>
                    </div>
                </div>   
            </div> 
        </div>
    </div>
  )
}

export default Home