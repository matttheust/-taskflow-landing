import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h1>Simplifique sua gestão de tarefas</h1>
        <p>
          O TaskFlow é a solução ideal para organizar, priorizar e acompanhar o progresso das suas atividades em um só lugar.
        </p>
        <div className="hero-buttons">
          <button className="cta-button primary">Experimente Agora</button>
          <button className="cta-button secondary">Saiba Mais</button>
        </div>
      </div>
    </header>
  );
};

export default Header;