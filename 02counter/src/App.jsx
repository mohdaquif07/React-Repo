
import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  // let counter = 5;

  const addValue = ()=>{
    // counter += 1
    if(counter<20){

      setcounter(counter + 1)
      console.log("clicked", counter)
    }
  }

  const decreaseValue = ()=>{
    if(counter > 0){

      setcounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value: {counter}</h2>
    
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={decreaseValue}>Decrease Value {counter}</button>
    
    </>

  )
}

export default App
