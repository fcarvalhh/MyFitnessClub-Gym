import React from 'react';

const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      title: "Vista Excepcional",
      description: "Todas as salas do ginásio são enquadradas por janelas de vidraça o que permite a luz natural e uma vista excepcional sobre o campo e o oceano atlântico ao fundo.",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12h3m6-9v3m6 6h3m-6 6v3"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="m6 6 3 3m6 0 3-3m0 12-3-3m-6 0-3 3"/>
      </svg>`
    },
    {
      title: "Equipamentos NAUTILUS",
      description: "Máquinas da reconhecida marca americana NAUTILUS, onde os treinos parecem mais suaves e o rendimento é maior.",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 10v4h1v-4"/>
        <path d="M6 12h2"/>
        <path d="M16 10v4h1v-4"/>
        <path d="M15 12h2"/>
        <path d="M9 10l1 4 1-4"/>
        <path d="M10 12h3"/>
        <path d="M9 7v1"/>
        <path d="M15 7v1"/>
        <path d="M9 16v1"/>
        <path d="M15 16v1"/>p
      </svg>`
    },
    {
      title: "Centro SCHWINN Cycling",
      description: "Bicicletas da conceituada marca e música profissional, que permitem um excelente treino cardio-vascular e uma forte perda de calorias.",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="18.5" cy="17.5" r="3.5"/>
        <circle cx="5.5" cy="17.5" r="3.5"/>
        <circle cx="15" cy="5" r="1"/>
        <path d="m14 17 6-6"/>
        <path d="m12 14 1.5 1.5"/>
        <path d="M16 5c.5 0 .5-.5.5-1h2l1 7h-4l-1.5-1.5L16 5z"/>
        <path d="M6 10h4l-2 4"/>
        <path d="m8 10 2-2 2 2"/>
      </svg>`
    },
    {
      title: "Balneários Premium",
      description: "Balneários amplos e espaçosos, com adequada ventilação e água quente garantida através de painéis solares de última geração.",
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m4 4 2.5 2.5M20 4l-2.5 2.5m-13 13L7 17M17 17l2.5 2.5M12 2v2m0 16v2M2 12h2m16 0h2"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="m8 12 2 2 4-4"/>
      </svg>`
    }
  ];

  const stats = [
    { number: "500", unit: "m²", label: "De espaço para exercício" },
    { number: "100%", unit: "", label: "Luz natural" },
    { number: "24/7", unit: "", label: "Água quente garantida" },
    { number: "Premium", unit: "", label: "Equipamentos" }
  ];

  return (
    <section id="instalacoes" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">
            O Melhor para Si
          </h2>
          <p className="fs-5 text-muted mb-4">
            As nossas instalações
          </p>
          
        </div>

        {/* Stats Row */}
        <div className="row mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4 rounded-3" style={{backgroundColor: 'rgba(220, 38, 38, 0.1)'}}>
                <h3 className="display-6 fw-bold mb-0 text-dark">
                  {stat.number}
                  <small className="fs-4 text-muted">{stat.unit}</small>
                </h3>
                <p className="text-dark fw-semibold mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h3 className="h2 fw-bold text-dark mb-4">
                Ambiente Saudável e Tranquilo
              </h3>
              <p className="fs-5 text-muted mb-4 lh-lg">
                Todo este ambiente, calmo e tranquilo, permite a prática desportiva num ambiente saudável, cómodo e de boa disposição.
              </p>
              <p className="text-muted mb-4 lh-lg">
                O ginásio é composto por 500 m² para a prática de exercício físico. Dispõe de uma sala de exercícios e saúde equipada com máquinas da categorizada marca americana Nautilus.
              </p>
              <p className="text-muted mb-4 lh-lg">
                Na sala de exercícios existem espaços destinados à musculação, cardio e alongamentos. Com os nossos instrutores pode fazer um plano de treino adequado às suas necessidades e objectivos.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="rounded-3 p-4 h-100 d-flex align-items-center justify-content-center" style={{backgroundColor: 'var(--accent-red-light)'}}>
                <div className="text-center">
                  <div className="mb-3" style={{color: 'var(--accent-red)'}}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
                      <path d="M6 12h12"/>
                      <path d="M12 12v10"/>
                      <path d="M6 2h12"/>
                      <path d="M10 6h4"/>
                      <path d="M10 10h4"/>
                      <path d="M10 14h4"/>
                      <path d="M10 18h4"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold text-dark">Instalações Modernas</h4>
                  <p className="text-muted">Com vista para o oceano</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="row g-4">
          {facilities.map((facility, index) => (
            <div key={index} className="col-lg-6">
              <div className="d-flex align-items-start p-4 bg-white rounded-3 shadow-sm h-100 facilities-card">
                <div className="me-4 flex-shrink-0" style={{color: 'var(--accent-red)'}}>
                  <div dangerouslySetInnerHTML={{ __html: facility.icon }} />
                </div>
                <div>
                  <h4 className="h5 fw-bold text-dark mb-3">
                    {facility.title}
                  </h4>
                  <p className="text-muted mb-0 lh-lg">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;