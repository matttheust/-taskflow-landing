import React from 'react';
import '../styles/Content.css';

const features = [
  {
    icon: 'lightbulb',
    title: 'Management',
    description: 'Gerencie seus projetos e alcance seus objetivos com eficiência.',
  },
  {
    icon: 'headphones',
    title: 'Customer Support',
    description: 'Ofereça um suporte ao cliente rápido e eficiente.',
    gradient: true,
  },
  {
    icon: 'people',
    title: 'Collaborative',
    description: 'Trabalhe em equipe com ferramentas colaborativas intuitivas.',
  },
];

const Content = () => {
  return (
    <section className="content-section">
      <div className="features">
        <h2>TaskFlow foi criado pensando em você</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${feature.gradient ? 'gradient-card' : ''}`}
            >
              <div className="icon">
                <i className={`fa fa-${feature.icon}`} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#learn-more" className="learn-more">
                Saiba Mais
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <p>
            O TaskFlow é ideal para freelancers e equipes que buscam simplificar
            seu planejamento e execução.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">Cadastre-se gratuitamente</button>
            <button className="cta-button secondary">Descubra mais</button>
          </div>
        </div>
        <div className="cta-image">
          <img
            src="https://via.placeholder.com/300"
            alt="TaskFlow analytics"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;