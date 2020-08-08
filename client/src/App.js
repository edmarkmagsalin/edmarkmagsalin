import React, { Fragment } from 'react';

// layout
import Navbar from './layouts/Navbar'
import Cover from './layouts/Cover'
import Footer from './layouts/Footer'

// main
import Home from './pages/Home'

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
        <Cover />
      </header>
        <main>
          <Home />
        </main>
      <Footer />
    </Fragment>
  );
}

export default App;
