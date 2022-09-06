import './App.css';
import React, { useState } from 'react';

function App() {
  console.log('Loading App comopnent....');
  /** 
   *  useState always returns an array, but we desctructure it for better readability
   *  current state and function to update the state variable
  */
  // const arr = useState(4);
  // const [count, setCount] = useState(4);


  /**
   *  Initializing state variable using function and variable
   */
  const countInitialization = () => {
    console.log('count initialization function');
    return 4;
  }

  const [count, setCount] = useState(() => countInitialization());

  const decrementCount = () => {
    setCount(count - 1);
    // setCount(prevCount => prevCount - 1);
  }

  const incrementCount = () => {
    // TODO: Increse the count by 1. 
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <h1>{count}</h1>
      <button>+</button>
    </div>
  );
}

export default App;
