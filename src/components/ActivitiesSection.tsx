import React from 'react';

interface Activity {
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

const ActivitiesSection: React.FC = () => {
  const activities: Activity[] = [
    {
      name: "Pilates",
      description: "Alongamentos e exercícios físicos que utilizam o peso do próprio corpo. Permite aumentar e restabelecer a flexibilidade e força muscular, melhora a respiração, corrige a postura, possibilitando a revigoração do corpo e da mente.",
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z"/>
        <path d="M12 8v8"/>
        <path d="m8 12 8 0"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>`,
      benefits: ["Flexibilidade", "Força Muscular", "Postura", "Respiração"]
    },
    {
      name: "Localizada",
      description: "Tem por objectivo o desenvolvimento da resistência muscular localizada, permitindo o fortalecimento e definição dos músculos. Os exercícios executados trabalham cada grupo muscular alternadamente.",
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.5 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1v1h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1v1h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1v-1h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1v-1h-1a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h5z"/>
        <path d="M6.445 6.5 9 12l-2.555 5.5a.5.5 0 0 1-.89 0L3 12l2.555-5.5a.5.5 0 0 1 .89 0z"/>
        <path d="M17.555 6.5 15 12l2.555 5.5a.5.5 0 0 0 .89 0L21 12l-2.555-5.5a.5.5 0 0 0-.89 0z"/>
      </svg>`,
      benefits: ["Resistência", "Fortalecimento", "Definição", "Coordenação"]
    },
    {
      name: "Pump",
      description: "Pump com pesos e barras que tonifica e fortalece o corpo. Aumenta a força e resistência muscular, melhora a condição física e permite descontrair ao som da música.",
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6.5 6.5 11 11"/>
        <path d="m21 21-1-1"/>
        <path d="m3 3 1 1"/>
        <path d="m18 22 4-4"/>
        <path d="m2 6 4-4"/>
        <path d="m3 10 7-7"/>
        <path d="m14 21 7-7"/>
      </svg>`,
      benefits: ["Tonificação", "Força", "Resistência", "Condição Física"]
    },
    {
      name: "Step",
      description: "O Step é uma das modalidades com mais ritmo e uma das mais procuradas nos ginásios. Melhora a forma física, perda de peso e desenvolve a coordenação motora.",
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m8 3 4 8 5-5v11H6V9l5 5 4-8"/>
        <path d="M2 21h20"/>
      </svg>`,
      benefits: ["Ritmo", "Perda de Peso", "Coordenação", "Forma Física"]
    },
    {
      name: "Cycling",
      description: "O Cycling indoor que tem por objectivo o condicionamento da capacidade cardiovascular, permitindo queimar inúmeras calorias. Consegue-se simular inúmeros percursos sobre uma bicicleta estacionária ao som de boa música.",
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="18.5" cy="17.5" r="3.5"/>
        <circle cx="5.5" cy="17.5" r="3.5"/>
        <circle cx="15" cy="5" r="1"/>
        <path d="m14 17 6-6"/>
        <path d="m12 14 1.5 1.5"/>
        <path d="M16 5c.5 0 .5-.5.5-1h2l1 7h-4l-1.5-1.5L16 5z"/>
        <path d="M6 10h4l-2 4"/>
        <path d="m8 10 2-2 2 2"/>
      </svg>`,
      benefits: ["Cardiovascular", "Queima Calorias", "Resistência", "Energia"]
    },
    {
      name: "GAP",
      description: "A GAP localizada em que se trabalham os músculos Glúteos, Abdominais e Pernas. Nesta aula são realizados diferentes exercícios que visam a melhoria da resistência geral, coordenação motora, ritmo, equilíbrio, força e flexibilidade.",
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2v20"/>
        <path d="M8 6h8"/>
        <path d="M8 12h8"/>
        <path d="M8 18h8"/>
        <circle cx="12" cy="6" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="18" r="2"/>
      </svg>`,
      benefits: ["Glúteos", "Abdominais", "Pernas", "Equilíbrio"]
    }
  ];

  return (
    <section id="atividades" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">
            Nossas Atividades
          </h2>
          <p className="fs-5 text-muted mb-4">
            Descubra a atividade perfeita para os seus objetivos
          </p>
          <div className="mx-auto" style={{width: '100px', height: '4px', backgroundColor: 'var(--primary-red)'}}></div>
        </div>

        <div className="row g-4">
          {activities.map((activity, index) => (
            <div key={activity.name} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 activity-card">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="activity-icon mb-3" style={{color: 'var(--accent-red)'}}>
                      <div dangerouslySetInnerHTML={{ __html: activity.icon }} />
                    </div>
                    <h3 className="h4 fw-bold text-dark mb-3">{activity.name}</h3>
                  </div>
                  
                  <p className="text-muted mb-4 lh-lg">
                    {activity.description}
                  </p>
                  
                  <div className="benefits-list">
                    <h6 className="fw-semibold text-dark mb-3">Benefícios:</h6>
                    <div className="row g-2">
                      {activity.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="col-6">
                          <span className="badge w-100 py-2 fw-normal">
                            ✓ {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="card-footer bg-transparent border-0 p-4 pt-0">
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;