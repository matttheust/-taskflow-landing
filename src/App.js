import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Pricing from './components/Pricing';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Pricing />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;