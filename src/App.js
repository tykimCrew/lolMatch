import React, { Component } from 'react';
import './App.css';

import BoardUrlInput from './containers/BoardUrlInput';
import Members from './containers/Members';
import Positions from './containers/Positions';
import Footer  from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top"><BoardUrlInput /></div>
        <div className="bottom">
          <div className="bottom_left"><Positions side="red" /></div>
          <div className="bottom_center"><Members /></div>
          <div className="bottom_right"><Positions side="blue" /></div>
        </div>
        <Footer />
      </div>
    );
  };
}

export default App;
