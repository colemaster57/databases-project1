import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Library from './pages/Library';
import Store from './pages/Store';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  const [user, setUser] = useState(null); 

  
  const handleLogin = (data) => {
    setUser(data.user); 
  };

  return (
    <Router>
      <NavigationBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/store" element={<Store user={user} />} />
          <Route path="/library" element={<Library user={user} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


