import React from 'react';
import axios from 'axios';
import SavedInsultsDisplay from './Components/SavedInsultsDisplay';
import './App.css';
import TranslationLangByLang from './Components/TranslationLangByLang';
import TranslationAll from './Components/TranslationAll';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      axiosInsult: '',
      bestInsults: [],
    }
  }

  insultAxios = () => {
    axios('generate_insult.php?lang=en&type=json')
    .then(response => this.setState({axiosInsult: response.data.insult}))
  }

  saveTranslation = (text) => {
    this.setState({
      bestInsults: [
        ...this.state.bestInsults,
        {
          "start": this.state.axiosInsult,
          "end": text,
        },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.insultAxios}>Original Insult</button>
      <p>{this.state.axiosInsult}</p>

      <TranslationLangByLang
        axiosInsult={this.state.axiosInsult}
        saveTranslation={this.saveTranslation}
      />
      <TranslationAll
        axiosInsult={this.state.axiosInsult}
        saveTranslation={this.saveTranslation}
      />
      <br />
      
      {this.state.bestInsults.length > 0 ?
        <div>
        <SavedInsultsDisplay 
          bestInsults = {this.state.bestInsults}
        />
      </div>
      : null
      }
      </div>
    );
  }
}

export default App;
