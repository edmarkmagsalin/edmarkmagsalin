import React, { Fragment } from 'react';

// layout
import Navbar from './layouts/Navbar'
import Banner from './layouts/Banner'
import Footer from './layouts/Footer'

// main
import Home from './pages/Home'

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
        <Banner />
      </header>
        <main>
          <Home />
        </main>
      <Footer />
    </Fragment>
  );
}

export default App;
