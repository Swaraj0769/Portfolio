import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='text-6xl'>
      {/* <Link to='/'>Home</Link>
      <Link to='/agence'>Agence</Link>
      <Link to='/project'>Projects</Link> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/project' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App