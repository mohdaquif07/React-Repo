import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username = "chai aur code" myArr={[1,2,3]}/>
    <Card/>
    </>
  )
}

export default App
