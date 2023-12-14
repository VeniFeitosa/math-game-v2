import { useState, useEffect } from 'react'

/**
 * Esse componente é responsável por renderizar o contador
 */
function Countdown({setTimeEnded, time}) {
  const [count, setCount] = useState(time)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(timer); // Limpa o intervalo quando chega a 0
          setTimeEnded(true)  // Seta o estado de timeEnded para true, indicando que a partida acabou
          return prevCount;
        } else {
          return prevCount - 1;
        }
      });
    }, 1000)
    
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h1 >Tempo: <span style={{color: count > 10 ? "" : "red"}}>{count}</span></h1>
    </div>
  )
}

export default Countdown
