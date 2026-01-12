import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Feedback from './components/Feedback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      --------
      <Dashboard />
      -------
      <Feedback />
    </>
  )
}

export default App
