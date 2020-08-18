import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/css/App.css'

// layout
import Navbar from './layouts/Navbar'
import Cover from './layouts/Cover'
import Footer from './layouts/Footer'

// main
import Home from './pages/Home'
import Test from './pages/Test'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Router>
      <header>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Cover} />
      </Switch>
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/test' component={Test} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
