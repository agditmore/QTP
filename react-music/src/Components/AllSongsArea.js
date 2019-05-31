import React from 'react';
import AllSongsList from './../SongData';
import AllSongsRow from './AllSongsRow';
import SortingButtons from './SortingButtons';
import SearchFields from './SearchFields';


class AllSongsArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            AllSongsList: AllSongsList.songs,
            displayedPlaylist: AllSongsList.songs,
            yearSearchField: '',
            titleSearchField: '',
            artistSearchField: '',
        };
    }

    customSort = (originalArray, comparator) => {
        const array = [...originalArray]
        for (let i = 0; i< array.length; i++){
            for (let j = i; j<array.length; j++){
                if (comparator(array[i], array[j])>0) {
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }

    orderAllSongsList = (algorithm) => {
        this.setState({displayedPlaylist: this.customSort(this.state.AllSongsList, algorithm)})
    }

    compareYearAscending = (a, b) => {
        if (parseInt(a.year) < parseInt(b.year)) {return -1;}
        if (parseInt(a.year) > parseInt(b.year)) {return 1;}
        return 0;
    }

    compareYearDescending = (a, b) => {
        if (parseInt(a.year) > parseInt(b.year)) {return -1;}
        if (parseInt(a.year) < parseInt(b.year)) {return 1;}
        return 0;
    }

    compareArtistAZ = (a, b) => {
        if (a.artist.toUpperCase() < b.artist.toUpperCase()) {return -1;}
        if (a.artist.toUpperCase() > b.artist.toUpperCase()) {return 1;}
        return 0;
    }

    compareArtistZA = (a, b) => {
        if (a.artist.toUpperCase() > b.artist.toUpperCase()) {return -1;}
        if (a.artist.toUpperCase() < b.artist.toUpperCase()) {return 1;}
        return 0;
    }

    compareTitleAZ = (a, b) => {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {return -1;}
        if (a.title.toUpperCase() > b.title.toUpperCase()) {return 1;}
        return 0;
    }

    compareTitleZA = (a, b) => {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {return -1;}
        if (a.title.toUpperCase() < b.title.toUpperCase()) {return 1;}
        return 0;
    }

    handleEnterPress = (e, searchType) => {
        
        let searchedPlaylist = [];
        if (e.key === "Enter"){
            const keyword = e.target.value.trim().toUpperCase();
            if (searchType === "year" && keyword.length > 0) {
                searchedPlaylist = this.state.displayedPlaylist.filter((song) => song.year === e.target.value);
            }
            else if (searchType === "title" && keyword.length > 0) {
                searchedPlaylist = this.state.displayedPlaylist.filter((song) => 
                    {let sameLetterCount = 0;
                    for (let i = 0; i < keyword.length; i++){
                        if (keyword.charAt(i) === song.title.toUpperCase().charAt(i)){
                            sameLetterCount++
                        }
                    }
                    if (sameLetterCount === keyword.length) {return true;}
                    else {return false;}
                    });
            }
            else if (searchType === "artist" && keyword.length > 0) {
                searchedPlaylist = this.state.displayedPlaylist.filter((song) => 
                    {let sameLetterCount = 0;
                    for (let i = 0; i < keyword.length; i++){
                        if (keyword.charAt(i) === song.artist.toUpperCase().charAt(i)){
                            sameLetterCount++
                        }
                    }
                    if (sameLetterCount === keyword.length) {return true;}
                    else {return false;}
                    });
            }
            else {
                searchedPlaylist = [];
            }
            this.setState({
                displayedPlaylist: searchedPlaylist,
            })
        }  
    }

    handleSearchChange(e, searchType) {
        if (searchType === "year") {
            this.setState({yearSearchField: e.target.value})
        }
        else if (searchType === "title") {
            this.setState({titleSearchField: e.target.value})
        }
        else if  (searchType === "artist") {
            this.setState({artistSearchField: e.target.value})
        }
    }

    clearSearch = () => {
        this.setState({
            displayedPlaylist: this.state.AllSongsList,
            yearSearchField: '',
            titleSearchField: '',
            artistSearchField: '',
        })
    }
        
    render(){
        return(
            <div>
                <h2>All Songs</h2>
                <SortingButtons
                    orderAllSongsList={this.orderAllSongsList}
                />
                <SearchFields
                    handleEnterPress={this.handleEnterPress}
                    handleSearchChange={this.handleSearchChange}
                    yearSearchField={this.state.yearSearchField}
                    artistSearchField={this.state.artistSearchField}
                    titleSearchField={this.state.titleSearchField}
                    clearSearch={this.clearSearch}
                />
            {this.state.displayedPlaylist.length > 0 ? this.state.displayedPlaylist.map((song) => 
                <AllSongsRow
                    song={song}
                    addToPlaylist={this.props.addToPlaylist}
                    playSong={this.props.playSong}
                />)
                : <div><p>Oh no! Your search did not return any results. Clear your search and try again!</p></div>
            }
            </div>
        )
    }
    
}

export default AllSongsArea;