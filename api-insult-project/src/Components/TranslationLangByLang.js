import React from 'react';
import axios from 'axios';

class TranslationLangByLang extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            textInRussian: '',
            textInAzerbaijani: '',
            textInAmharic: '',
            textInIcelandic: '',
            textInDutch: '',
            textInEnglish: '',
        }
    }

    englishToRussian = () => {
        const textR = this.props.axiosInsult;
        axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+textR+'&lang=en-ru',  //removed key
          { method: 'POST'})
        .then(response => this.setState({textInRussian: response.data.text}))
      }
    
      russianToAzerbaijani = () => {
        const textA = this.state.textInRussian;
        axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+textA+'&lang=ru-az',  //removed key
          { method: 'POST'})
        .then(response => this.setState({textInAzerbaijani: response.data.text}))
      }
    
      azerbaijaniToAmharic = () => {
        const textAm = this.state.textInAzerbaijani;
        axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+textAm+'&lang=az-am',  //removed key
          { method: 'POST'})
        .then(response => this.setState({textInAmharic: response.data.text}))
      }
    
      amharicToIcelandic = () => {
        const textI = this.state.textInAmharic;
        axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+textI+'&lang=am-is',  //removed key
          { method: 'POST'})
        .then(response => this.setState({textInIcelandic: response.data.text}))
      }
    
      icelandicToDutch = () => {
        const textD = this.state.textInIcelandic;
        axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+textD+'&lang=is-nl',  //removed key
          { method: 'POST'})
        .then(response => this.setState({textInDutch: response.data.text}))
      }
    
      dutchToEnglish = () => {
        const textE = this.state.textInDutch;
        axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+textE+'&lang=nl-en',  //removed key
          { method: 'POST'})
        .then(response => this.setState({textInEnglish: response.data.text}))
      }

      render() {
          return(
              <div>
                
                <button onClick={this.englishToRussian}>
                    Translate to Russian
                </button>
                <p>{this.state.textInRussian}</p>

                <button onClick={this.russianToAzerbaijani}>
                    Translate to Azerbaijani
                </button>
                <p>{this.state.textInAzerbaijani}</p>

                <button onClick={this.azerbaijaniToAmharic}>
                    Translate to Amharic
                </button>
                <p>{this.state.textInAmharic}</p>

                <button onClick={this.amharicToIcelandic}>
                    Translate to Icelandic
                </button>
                <p>{this.state.textInIcelandic}</p>

                <button onClick={this.icelandicToDutch}>
                Translate to Dutch
                </button>
                <p>{this.state.textInDutch}</p>

                <button onClick={this.dutchToEnglish}>
                    Translate to English
                </button>
                <button onClick={() => this.props.saveTranslation(this.state.textInEnglish)}>
                    Save this translation
                </button>
                <p>{this.state.textInEnglish}</p>
              </div>
          )
      }
}

export default TranslationLangByLang;