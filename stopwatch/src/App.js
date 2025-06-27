import { useRef, useState } from 'react';
import './App.css';
import { Button, Stack, Typography } from '@mui/material';

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
  return (
   <Stack>
    <Typography component={'h1'} variant='h1'>
      Stopwatch
    </Typography>
    <Stack direction={'row'}>
      <Typography>Time: {' '}</Typography>
      <Typography>{time.toFixed(2)}</Typography>
    </Stack>
    <Stack direction={'row'}>
      {!running && (
        <button name='sStart' onClick={handleStart}>Start</button>
      )}
      {running && (
                <button name='Stop' onClick={handleStop}>Stop</button>
      )}
      <button name='Reset' onClick={handleReset}>Reset</button>
    </Stack>
   </Stack>
  )
}

export default App;
