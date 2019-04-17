import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { WOW } from 'wowjs';
import { connect } from 'react-redux';

import './App.scss';
import HomePage from './containers/HomePage';
import { getConfiguration, getGenres } from './store/actions/app';
import Loader from './components/Loader';

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
        {this.props.loader ? <Loader isHide={this.props.hideLoader} /> : null}
        <main className="main">
          <Route exact path="/" component={HomePage}/>
        </main>
      </div>
    );
  }
}

export default connect( state => ({
  loader: state.app.loader,
  hideLoader: state.app.hideLoader
}) , { getConfiguration, getGenres })(App);
