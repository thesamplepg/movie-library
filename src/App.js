import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { WOW } from 'wowjs';
import { connect } from 'react-redux';

import './App.scss';
import HomePage from './containers/HomePage';
import { getConfiguration, getGenres } from './store/actions/app';
import Detalis from './containers/Detalis';

class App extends Component {
  
  
  componentWillMount() {
    this.props.getConfiguration();
    this.props.getGenres();
  }
  

  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }

  render() {
    return (
      <div className="App">
        <main className="main">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/detalis/:type/:id" component={Detalis}/>
        </main>
      </div>
    );
  }
}

export default connect( null , { getConfiguration, getGenres })(App);
