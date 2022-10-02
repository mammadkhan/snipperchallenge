import React from 'react';

import Header from  './components/Header'
import Hero from  './components/Hero'
import Features from  './components/Features'
import Footer from  './components/Footer'

const App: React.FC = () => {
  return(
    <div className='wrapper'>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App;
