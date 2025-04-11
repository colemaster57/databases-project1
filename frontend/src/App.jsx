import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Library from './pages/Library';
import Store from './pages/Store';
import './App.css';
function App(){
  return(
    <Router>
      <NavigationBar />
      <div className = "main">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/store" element = {<Store />} />
          <Route path="/library" element = {<Library />} />
        </Routes>
      </div>
    </Router>
  );

}
export default App;
