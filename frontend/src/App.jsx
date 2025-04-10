import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './compents/NavigationBar'
import Home from './pages/Home'
import Home from './pages/Library'
import Home from './pages/Store'
import './App.css'
function App(){
  return(
    <Router>
      <NavigationBar />
      <div className = "main">
        <Routes>
          <Route Path = "/" element = {<Home />} />
          <Route Path = "/" element = {<Store />} />
          <Route Path = "/" element = {<Library />} />
        </Routes>
      </div>
    </Router>
  )

}
