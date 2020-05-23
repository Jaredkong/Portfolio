import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navibar from './components/Header';
import Footer from './components/Footer';
// import pages
import About from './components/Pages/about';
import Portfolio from './components/Pages/portfolio';
import Contact from './components/Pages/contact';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Navibar/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>

    )
  }
}


export default App;
