import { useState } from 'react'
import './App.css'
import Drawer from '../common/component/Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Page2 from '../pages/Page2/Page2'
import Home from '../pages/Home/Home'
import Page3 from '../pages/Page3/Page3'
import Page4 from '../pages/Page4/Page4'
import Pages5 from '../pages/Pages5/Pages5'
import Page6 from '../pages/Page6/Page6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      <Routes>
        <Route path='*' element={<Navigate to={'/home'} /> } ></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
        <Route path='/page5' element={<Pages5 />} />
        <Route path='/page6' element={<Page6 />} />
      </Routes>
      
    </>
  )
}

export default App
