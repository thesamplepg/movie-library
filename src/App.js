import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import HomePage from './containers/HomePage';
import { getConfiguration, getGenres } from './store/actions/app';
import Detalis from './containers/Detalis';
import SearchResults from './containers/SearchResults';
import Loader from './components/Loader';
import Footer from './components/Footer';

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
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/detalis/:type/:id" component={Detalis}/>
            <Route path="/search/:query" component={SearchResults}/>
            <Route path="*" component={HomePage}/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default connect( state => ({
  searchLoading: state.app.searchLoading,
  configurationLoading: state.app.configurationLoading
}) , { getConfiguration, getGenres })(App);
