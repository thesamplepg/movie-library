import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import HomePage from './containers/HomePage';
import { getConfiguration, getGenres } from './store/actions/app';
import Detalis from './containers/Detalis';
import SearchResults from './containers/SearchResults';
import Loader from './components/Loader';

class App extends Component {

  componentWillMount() {
    this.props.getConfiguration();
    this.props.getGenres();
  }

  render() {
    return (
      <div className="App">
        <main className="main">
          <Loader loading={this.props.searchLoading}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/detalis/:type/:id" component={Detalis}/>
          <Route path="/search/:query" component={SearchResults}/>
        </main>
      </div>
    );
  }
}

export default connect( state => ({
  searchLoading: state.app.searchLoading,
  configurationLoading: state.app.configurationLoading
}) , { getConfiguration, getGenres })(App);
