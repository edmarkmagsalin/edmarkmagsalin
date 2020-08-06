import React from 'react';

// layout
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

// main
import Home from './components/pages/Home'

function App() {
  return (
    <div>
      <Navbar />
        <main>
          <Home />
        </main>
      <Footer />
    </div>
  );
}

export default App;
