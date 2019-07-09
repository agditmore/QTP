import React from 'react';
import axios from 'axios';

class TranslationAll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cumulativeTranslation: '',
        }
    }

    translateAll = () => { 
        if (this.state.axiosInsult !== ""){
          const insult = this.props.axiosInsult;
          axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+insult+'&lang=en-ru', 
          { method: 'POST'})
          .then(response => axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+response.data.text[0]+'&lang=ru-az', //removed key
          { method: 'POST'}))
          .then(response => axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+response.data.text[0]+'&lang=az-am', //removed key
          { method: 'POST'}))
          .then(response => axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+response.data.text[0]+'&lang=am-is', //removed key
          { method: 'POST'}))
          .then(response => axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+response.data.text[0]+'&lang=is-nl', //removed key
          { method: 'POST'}))
          .then(response => axios('https://translate.yandex.net/api/v1.5/tr.json/translate?key=&text='+response.data.text[0]+'&lang=nl-en', //removed key
          { method: 'POST'}))
          .then(response => this.setState({cumulativeTranslation: response.data.text}))
        }
        else {
          alert("You need an insult first!")
        }
      }

    render() {
        return(
            <div>
                <button onClick={this.translateAll}>All Translations IN ONE!</button>
                <button onClick={() => this.props.saveTranslation(this.state.cumulativeTranslation)}>Save this translation</button>
                <p>{this.state.cumulativeTranslation}</p>
            </div>
            
        )
    }
}

export default TranslationAll;