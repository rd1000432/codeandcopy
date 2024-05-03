import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentCreation from './components/ContentCreation';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentCreation />
      <Newsletter />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
