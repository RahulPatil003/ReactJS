import { useState } from 'react';
import './app.css'

function App() {
  const [count, setCount] = useState(0)
  const addCount = () =>{
    setCount(count+1)
    // setCount((pre)=> pre+1)
    // setCount((pre)=> pre+1)
  }
  const removeCount = () =>{
    setCount(count-1)
    // setCount((pre)=> pre-1)
    // setCount((pre)=> pre-1)
  }
  return (
    <>
      
      <div id="main">
        <h1>Counter</h1>
        <h2>Counter Value : {count}</h2>
        <button onClick={addCount}>Add </button>
        <button onClick={removeCount}>Remove</button>
      </div>
        
    </>
  );
}

export default App;
