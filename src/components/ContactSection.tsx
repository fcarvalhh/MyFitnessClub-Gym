import React from 'react';

const ContactSection: React.FC = () => {
  const scheduleData = [
    { days: "2ª a 6ª Feira", hours: "7h às 22h", icon: "•" },
    { days: "Sábado", hours: "9h às 13h | 18h às 20h", icon: "•" },
    { days: "Domingo", hours: "9h às 13h", icon: "•" }
  ];

  return (
    <section id="contatos" className="py-5" style={{backgroundColor: 'var(--text-black)', color: 'white'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 text-white">
            Venha nos Conhecer
          </h2>
          <p className="fs-5 text-white-50 mb-4">
            A Saúde e o bem estar em primeiro lugar
          </p>
          <div className="mx-auto" style={{width: '60px', height: '3px', backgroundColor: 'var(--accent-red)'}}></div>
        </div>

        <div className="row g-5">
          {/* Schedule */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="h2 fw-bold mb-4 text-white">
                <i className="bi bi-clock me-3"></i>
                Horário de Funcionamento
              </h3>
            </div>
            
            <div className="row g-3">
              {scheduleData.map((schedule, index) => (
                <div key={index} className="col-md-12">
                  <div className="rounded-3 p-4 h-100" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                    <div className="d-flex align-items-center mb-3">
                      <span className="me-3" style={{color: 'var(--accent-red)', fontSize: '1.5rem'}}>{schedule.icon}</span>
                      <h4 className="h5 fw-bold mb-0 text-white">{schedule.days}</h4>
                    </div>
                    <p className="fs-5 mb-0 text-white-50">{schedule.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="h2 fw-bold mb-4 text-white">
                <i className="bi bi-envelope me-3"></i>
                Contactos
              </h3>
            </div>
            
            <div className="rounded-3 p-4 mb-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
              <div className="contact-info">
                <div className="mb-4">
                  <h4 className="h5 fw-bold mb-2 text-white">
                    <i className="bi bi-building me-2"></i>
                    Empresa
                  </h4>
                  <p className="mb-0 text-white-50">
                    MyFitness Club – Desporto e Bem Estar, Lda
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="h5 fw-bold mb-2 text-white">
                    <i className="bi bi-geo-alt me-2"></i>
                    Morada
                  </h4>
                  <p className="mb-0 text-white-50">
                    <i className="bi bi-geo-alt-fill me" style={{fontSize: '0.9rem', color: 'var(--accent-red)'}}></i>
                    <a href="https://www.google.com/maps/search/?api=1&query=Av.+João+Paulo+II,+40+1º,+2970-868+SESIMBRA" target="_blank" rel="noopener" className="text-white-50 text-decoration-none">
                  Av. João Paulo II, 40 1º. 2970-868 SESIMBRA<br />
                  
                </a><br />
                    
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="h5 fw-bold mb-2 text-white">
                    <i className="bi bi-envelope me-2"></i>
                    Email
                  </h4>
                  <a href="mailto:info@myfitnessclub.pt" className="fw-semibold text-decoration-none text-white-50">
                    info@myfitnessclub.pt
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center text-lg-start">
              <button className="btn btn-warning btn-lg px-5 py-3 fw-bold" onClick={() => window.location.href = 'mailto:info@myfitnessclub.pt'}>
                <i className="bi bi-person-plus me-2"></i>
                Juntar-se Agora
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="rounded-3 p-5 text-center" style={{backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.2)'}}>
              <h3 className="h2 fw-bold mb-3 text-white">
                Pronto para Começar a sua Jornada?
              </h3>
              <p className="fs-5 text-white-50 mb-4">
                Venha conhecer as nossas instalações e descubra como podemos ajudá-lo a atingir os seus objetivos de fitness.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <button className="btn btn-accent btn-lg px-5 py-3 fw-semibold" onClick={() => window.location.href = 'mailto:info@myfitnessclub.pt'}>
                  Visita Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;