import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <h1>Markdown Editor</h1>
        <div className="row">
          <div className="col-sm-6">
            <textarea className="form-control" rows="30"></textarea>
          </div>
          <div className="col-sm-6 result">
            <h2>Résultat</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
