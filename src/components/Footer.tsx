import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="pt-5" style={{backgroundColor: 'var(--text-dark)', color: 'white'}}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold mb-3 text-white">
              MyFitness Club
            </h3>
            <p className="text-white-50 mb-4 lh-lg">
              O seu clube de fitness em Sesimbra. Oferecemos as melhores condições para a sua prática desportiva com vista para o oceano atlântico.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="fs-4 text-decoration-none text-white-50">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="fs-4 text-decoration-none text-white-50">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="mailto:info@myfitnessclub.pt" className="fs-4 text-decoration-none text-white-50">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3 text-white">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button 
                  className="btn btn-link text-white-50 text-decoration-none p-0 fw-normal"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link text-white-50 text-decoration-none p-0 fw-normal"
                  onClick={() => scrollToSection('atividades')}
                >
                  Atividades
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link text-white-50 text-decoration-none p-0 fw-normal"
                  onClick={() => scrollToSection('instalacoes')}
                >
                  Instalações
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link text-white-50 text-decoration-none p-0 fw-normal"
                  onClick={() => scrollToSection('contatos')}
                >
                  Contactos
                </button>
              </li>
            </ul>
          </div>

          {/* Activities */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-white">Atividades</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-white-50">• Pilates</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">• Localizada</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">• Pump</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">• Step</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">• Cycling</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">• GAP</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-white">Contactos</h5>
            <div className="text-white-50">
              <p className="mb-2">
                <i className="bi bi-geo-alt me"></i>
                <a href="https://www.google.com/maps/search/?api=1&query=Av.+João+Paulo+II,+40+1º,+2970-868+SESIMBRA" target="_blank" rel="noopener" className="text-white-50 text-decoration-none">
                  Av. João Paulo II, 40 1º<br />
                  2970-868 SESIMBRA
                </a>
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope me"></i>
                <a href="mailto:info@myfitnessclub.pt" className="text-white-50 text-decoration-none">
                  info@myfitnessclub.pt
                </a>
              </p>
              <p className="mb-2">
                <i className="bi bi-clock me"></i>
                Seg-Sex: 7h-22h<br />
                Sáb: 9h-13h | 18h-20h<br />
                Dom: 9h-13h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-4 border-secondary" />
        <div className="row align-items-center py-3">
          <div className="col-md-6">
            <p className="text-white-50 mb-0">
              © {currentYear} MyFitness Club. Todos os direitos reservados.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;