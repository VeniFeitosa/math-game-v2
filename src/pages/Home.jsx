import {React} from 'react'
import { Link } from 'react-router-dom'
import Dificuldades from '../components/Dificuldades'
import {useGameContext } from '../hooks/useGameContext.js'

function Home() {
    const contexto = useGameContext()
    if (contexto.loading) {
        return <h1>Loading...</h1>
    }else{
        console.log(contexto)
        return (
            <div className='container'>
                <div className="main row text-center">
                    <div className="col-md-12 text-center">
                        <h1>Jogo da Matemática</h1>
                    </div>
                    <div className="col-md-12 text-center texto">
                        <div className='dificuldades mb-4'>
                            <label>Dificuldade: </label>
                            <Dificuldades />
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 mb-4">
                                <Link className='btn btn-primary btnOperacao' to={'/multi'}>Multiplicação</Link>
                            </div>
                            <div className="col-md-12 col-sm-12 mb-4">
                                <Link className='btn btn-primary btnOperacao' to={'/divisao'}>Divisão</Link>
                            </div>
                            <div className="col-md-12 col-sm-12 mb-4">
                                <Link className='btn btn-primary btnOperacao' to={'/adicao'}>Adição</Link>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <Link className='btn btn-primary btnOperacao' to={'/subtracao'}>Subtração</Link>
                            </div>
                        </div>   
                    </div> 
                </div>
            </div>
        )
    }
    
}

export default Home