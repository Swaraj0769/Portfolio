import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/common/Stair.jsx'
import NavContext from './context/NavContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Stair>
        <NavContext>
          <App />
        </NavContext>
      </Stair>
    </BrowserRouter>
  </React.StrictMode>,
)
