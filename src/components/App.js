
import React from "react";
import './../styles/App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSecond => prevSecond + 1);
    }, 1000)
    return () => clearInterval(timer);
  }, [])
  
   return (
    <div>
        <p>You've been on this page for { seconds } seconds.</p>
    </div>
  )
}

export default App
