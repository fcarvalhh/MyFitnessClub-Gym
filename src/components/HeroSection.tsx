import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section d-flex align-items-center min-vh-100 position-relative">
      <div className="hero-background position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      
      <div className="container position-relative z-3 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mb-4 animate-fade-in">
              <img 
                src="/myfitness.png" 
                alt="MyFitness Logo" 
                className="mb-3"
                style={{height: '260px', width: 'auto'}}
              />
            </div>
            <h1 className="display-3 fw-bold mb-4 animate-fade-in">
              Sempre em Forma
            </h1>
            <p className="fs-4 mb-5 opacity-90 animate-fade-in-delay">
              Bem-vindo ao Clube de Fitness. Temos a melhor solução para si.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 animate-fade-in-delay-2">
              <button 
                className="btn btn-warning btn-lg px-5 py-3 fw-semibold"
                onClick={() => scrollToSection('atividades')}
              >
                Começar Agora
              </button>
            </div>
            
            {/* Scroll indicator abaixo do botão */}
            <div className="d-flex justify-content-center mt-4">
              <div className="scroll-indicator animate-bounce">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 16.414l-6.293-6.293a1 1 0 10-1.414 1.414l7 7a1 1 0 001.414 0l7-7a1 1 0 10-1.414-1.414L12 16.414z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;