import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

const App = () => {

  return (
    <div>
      {/* <Link to='/'>Home</Link>
      <Link to='/agence'>Agence</Link>
      <Link to='/project'>Projects</Link> */}

      <Navbar />

      <FullScreenNav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/project' element={<Projects />} />
        </Routes>
    </div>
  )
}

export default App