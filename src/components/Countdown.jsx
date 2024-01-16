import { useState, useEffect } from 'react'
import { useGameContext } from '../hooks/useGameContext'

function Countdown() {

  const { setTimeEnded, tempo } = useGameContext()
  const [count, setCount] = useState(tempo)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(timer);
          return prevCount;
        } else {
          return prevCount - 1;
        }
      });
    }, 1000);

    if (count === 0) {
      setTimeEnded(true);
    }

    return () => {
      clearInterval(timer);
    };
    
  }, [count, setTimeEnded]);

  return (
    <div>
      <h1>Tempo: <span style={{ color: count > 10 ? "" : "red" }}>{count}</span></h1>
    </div>
  )
}

export default Countdown
