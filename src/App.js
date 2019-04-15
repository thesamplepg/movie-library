import React, { Component } from 'react';
import './App.css';

import config from './configs';

class App extends Component {
  
  async componentDidMount() {
    console.log(config);
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${config.apiKey}`);
    const response = await res.json();
    
    console.log(response);
  }

  render() {
    return (
      <div className="App">
        as
      </div>
    );
  }
}

export default App;
