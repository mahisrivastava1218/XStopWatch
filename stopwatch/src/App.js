import { useRef, useState } from 'react';
import './App.css';
function App() {
  const[time,setTime]=useState(0.00);
  const timerRef = useRef(null);
  const[running,setRunning] = useState(false);
  const handleStart=()=>{
    if(timerRef.current) return;
    timerRef.current = setInterval(()=>{
      setTime((prev)=> +(prev+0.01).toFixed(2));
    },10);
   setRunning(true);
  }
  const handleStop=()=>{
      clearInterval(timerRef.current);
      timerRef.current=null;
     setRunning(false);
  }
  const handleReset=()=>{
    clearInterval(timerRef.current);
    timerRef.current=null;
    setTime(0.00);
  }
   const formatTime = (t) => {
    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60);
    const centiseconds = Math.floor((t - Math.floor(t)) * 100);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${centiseconds
      .toString()
      .padStart(2, '0')}`;
  };
  return (
   <div>
    <section component={'h1'} variant='h1'>
      Stopwatch
    </section>
    <section direction={'row'}>
      <span>Time: {formatTime(time)}</span>
      <span>{time.toFixed(2)}</span>
    </section>
    <section direction={'row'}>
      {!running && (
        <button name='sStart' onClick={handleStart}>Start</button>
      )}
      {running && (
                <button name='Stop' onClick={handleStop}>Stop</button>
      )}
      <button name='Reset' onClick={handleReset}>Reset</button>
    </section>
   </div>
  )
}

export default App;