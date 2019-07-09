import React from 'react';
import {sites} from './data.json';
import SearchFields from './SearchFields';
import SiteRows from './SiteRows';
import SiteDisplayHeaders from './SiteDisplayHeaders';

class AllSitesDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showOrHideAllSitesDisplay: true,
            AllSitesList: sites,
            nameSearchField: '',
        }
    }

    handleEnterPress = (e) => { //break into two functions for better readability
        let searchedSiteList = [];
        if (e.key === "Enter"){
            const keyword = e.target.value.trim().toUpperCase();
            if (keyword.length > 0) {
                searchedSiteList = this.props.displayedSiteList.filter((site) => 
                    {let sameLetterCount = 0;
                    for (let i = 0; i < keyword.length; i++){ //see about condensing for loops
                        if (keyword.charAt(i) === site.name.toUpperCase().charAt(i)){
                            sameLetterCount++
                        }
                    }
                    if (sameLetterCount === keyword.length) {return true;}
                    else {return false;}
                    });
            }
            else {
                searchedSiteList = [];
            }
            this.props.updateSiteList(searchedSiteList)
        }  
    }

    handleSearchChange = (e) => {
            this.setState({nameSearchField: e.target.value})
    }

    clearSearch = () => {
        this.setState({
            displayedSiteList: this.state.AllSitesList,
            nameSearchField: '',
        })
    }
    render(){
        return(
            <div>
                <SearchFields
                handleEnterPress={this.handleEnterPress}
                handleSearchChange={this.handleSearchChange}
                nameSearchField={this.state.nameSearchField}
                clearSearch={this.clearSearch}
                />
                <SiteDisplayHeaders />
                <SiteRows
                displayedSiteList={this.props.displayedSiteList}
                />
            </div>
        )
    } 
}

export default AllSitesDisplay;