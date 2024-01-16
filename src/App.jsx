import {Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { GameProvider } from './contexts/GameContext.jsx'
import Game from './components/Game.jsx'

function App() {
  return (
      <GameProvider>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/multi' element={<Game tipo='multi'/>} />
            <Route path='/adicao' element={<Game tipo='adicao'/>} />
            <Route path='/subtracao' element={<Game tipo='subtracao'/>}/>
            <Route path='/divisao' element={<Game tipo='divisao'/>}/>
          </Routes>
        </HashRouter>
      </GameProvider>
  )
}

export default App