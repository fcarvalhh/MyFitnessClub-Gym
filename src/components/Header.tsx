import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${isScrolled ? 'bg-dark' : ''}`}>
      <div className="container">
        <a 
          className="navbar-brand" 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <img 
            src="/myfitness.png" 
            alt="MyFitness" 
            width="32" 
            height="32" 
            className="d-inline-block align-text-top me-2"
          />
          My Fitness Club
        </a>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className="nav-link btn"
                onClick={() => scrollToSection('home')}
              >
                Início
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn"
                onClick={() => scrollToSection('atividades')}
              >
                Atividades
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn"
                onClick={() => scrollToSection('instalacoes')}
              >
                Instalações
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn"
                onClick={() => scrollToSection('contatos')}
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;