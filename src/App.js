import GithubCorner from 'react-github-corner';
import React, { Component } from 'react';
import './App.css';
import { sampleText } from './sampleText';
import marked from 'marked';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: sampleText
     }   
  }

  // récupère le texte enregistré dans le localStorage 
  componentDidMount () {
    const text = localStorage.getItem('text')
    //si c'est vide on récupère le texte de départ
    return ( text ? this.setState({text}) : this.setState({ text: sampleText }) )
  }

  // Enregistrer les modifications dans le localStorage
  componentDidUpdate () {
    //const text = this.state.text
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange = evt => {
    const text = evt.target.value
    this.setState({ text })
  }

  // traduction du texte avec marked.js
  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html: __html }

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
            <div dangerouslySetInnerHTML={ this.renderText(this.state.text) }/>
          </div>
        </div>
        <GithubCorner href="https://github.com/sandix34/Markdown-Editor" />
      </div>
      
    );
  }
}

export default App;
