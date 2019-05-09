import React, { Component } from 'react';
import './App.css';
import { sampleText } from './sampleText';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: sampleText
     }   
  }

  handleChange = evt => {
    const text = evt.target.value
    this.setState({ text })
  }

  render() {
    return (
      <div className="container">
        <h1>Markdown Editor</h1>
        <div className="row">
          <div className="col-sm-6">
            <textarea 
            className="form-control" 
            rows="30"
            value={ this.state.text }
            onChange={ this.handleChange }
            />
          </div>
          <div className="col-sm-6 result">
            <div>
              { this.state.text }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
