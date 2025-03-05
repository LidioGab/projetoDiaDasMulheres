import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Statistics from './Statistics';
import Campaigns from './Contact'; // Importando como Campaigns mas ainda do arquivo Contact.js
import './App.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="Main-page">
        <header>
          <div className="logo">DIA DA MULHER</div>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={menuOpen ? 'active' : ''}>
            <Link to="/" onClick={closeMenu}>Início</Link>
            <Link to="/about" onClick={closeMenu}>Sobre</Link>
            <Link to="/statistics" onClick={closeMenu}>Estatísticas</Link>
            <Link to="/campaigns" onClick={closeMenu}>Campanhas</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/campaigns" element={<Campaigns />} />
          </Routes>
        </main>
        <footer>
          &copy; {new Date().getFullYear()} Dia Internacional da Mulher. Todos os direitos reservados.
        </footer>
      </div>
    </Router>
  );
}

export default App;
