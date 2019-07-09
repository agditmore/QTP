import React from 'react';
import './App.css';
import Map from './components/Map';
import AllSitesDisplay from './components/AllSitesDisplay';
import DateInfo from './components/DateInfo';
import {sites} from './components/data.json';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayedSiteList: sites,
    }
  }

  updateSiteList = (searchedSiteList) =>{
    this.setState({
      displayedSiteList: searchedSiteList,
    })
  } 

  render(){
    return (
      <div className="App">
      <h2>
        Archaeological Sites: Eastern Crete, Geometric Focus
      </h2>
      <DateInfo
      />
      <div>
        <AllSitesDisplay 
        displayedSiteList={this.state.displayedSiteList}
        updateSiteList={this.updateSiteList}
        />
      </div>
      <div id="map-container">
      <Map 
      displayedSiteList={this.state.displayedSiteList}
      />
      </div>
      </div>
    )
  }
}

export default App;
