import { useState } from 'react'
import './App.css'
import Drawer from '../pages/Drawer/Drawer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Drawer />
      
    </>
  )
}

export default App
