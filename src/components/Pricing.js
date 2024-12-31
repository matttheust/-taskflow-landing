import React from 'react';
import '../styles/Pricing.css';

const plans = [
  {
    name: 'Education',
    price: '0$',
    description: 'Brief price description',
    features: [
      'Only 2 Operators',
      'Abandoned Cart',
      'Facebook & Instagram Ads',
      'Order Notifications',
      'Landing Pages',
    ],
    image: 'https://via.placeholder.com/150', // Substitua com a URL real
    buttonText: 'Order Now',
  },
  {
    name: 'Professional',
    price: '10$',
    description: 'Brief price description',
    features: [
      'Only 2 Operators',
      'Abandoned Cart',
      'Facebook & Instagram Ads',
      'Order Notifications',
      'Landing Pages',
    ],
    image: 'https://via.placeholder.com/150', // Substitua com a URL real
    buttonText: 'Order Now',
  },
  {
    name: 'Business',
    price: '99$',
    description: 'Brief price description',
    features: [
      'Only 2 Operators',
      'Abandoned Cart',
      'Facebook & Instagram Ads',
      'Order Notifications',
      'Landing Pages',
    ],
    image: 'https://via.placeholder.com/150', // Substitua com a URL real
    buttonText: 'Order Now',
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Simple Pricing for Your Team</h2>
      <p className="pricing-subtitle">
        TaskFlow oferece planos ideais para todos os tipos de equipes.
      </p>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <img src={plan.image} alt={plan.name} className="pricing-image" />
            <h3 className="pricing-plan">{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            <p className="pricing-price">{plan.price} <span>/ per month</span></p>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-button">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;