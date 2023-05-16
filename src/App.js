import './App.css';
import {useEffect, useState} from 'react';
import video from './Forest.mov';

function App() {
  const [advice,setAdvice] = useState ('');
  useEffect(()=>{
    getAdvice();
  },[])
  const getAdvice=async()=>{
    const response = await fetch('http://www.boredapi.com/api/activity/');
    const data = await response.json();
    setAdvice(data.activity);
  }
   return (
    <div className="App">
      <video autoPlay muted loop>
        <source src={video} type='video/mp4'/>
      </video>
      <h1>What should I do?</h1>
      <button onClick={()=> getAdvice()}>Get advice</button>
      <p>{advice}</p>
    </div>
  );
}

export default App;
