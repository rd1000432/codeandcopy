import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentCreation from './components/ContentCreation';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentCreation />
      <Newsletter />
    </div>
  );
}

export default App;
