import React from 'react';
import AllSongsRow from './AllSongsRow';
import SortingButtons from './SortingButtons';
import SearchFields from './SearchFields';
import { connect } from 'react-redux';
import { 
    setDisplayedPlaylist, 
    changeYearSearchField, 
    changeArtistSearchField, 
    changeTitleSearchField } from './../redux/actions';


class AllSongsArea extends React.Component {

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
        this.props.setDisplayedPlaylist(this.customSort(this.props.AllSongsList, algorithm))
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
                searchedPlaylist = this.props.displayedPlaylist.filter((song) => song.year === e.target.value);
            }
            else if (searchType === "title" && keyword.length > 0) {
                searchedPlaylist = this.props.displayedPlaylist.filter((song) => 
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
                searchedPlaylist = this.props.displayedPlaylist.filter((song) => 
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
            this.props.setDisplayedPlaylist(searchedPlaylist)
        }  
    }

    handleSearchChange = (e, searchType) => {
        if (searchType === "year") {
            this.props.changeYearSearchField(e.target.value)
        }
        else if (searchType === "title") {
            this.props.changeTitleSearchField(e.target.value)
        }
        else if  (searchType === "artist") {
            this.props.changeArtistSearchField(e.target.value)
        }
    }

    clearSearch = () => {
        this.props.setDisplayedPlaylist(this.props.AllSongsList)
        this.props.changeYearSearchField('')
        this.props.changeTitleSearchField('')
        this.props.changeArtistSearchField('')
    }
        
    render(){
        return(
            <div>
                <h2>Library</h2>
                {/* Carefully consider which of these props REALLY need to be passed down */}
                <SortingButtons
                    orderAllSongsList={this.orderAllSongsList}
                    compareYearAscending={this.compareYearAscending}
                    compareYearDescending={this.compareYearDescending}
                    compareArtistAZ={this.compareArtistAZ}
                    compareArtistZA={this.compareArtistZA}
                    compareTitleAZ={this.compareTitleAZ}
                    compareTitleZA={this.compareTitleZA}
                />
                <SearchFields
                    handleEnterPress={this.handleEnterPress}
                    handleSearchChange={this.handleSearchChange}
                    yearSearchField={this.props.yearSearchField}
                    artistSearchField={this.props.artistSearchField}
                    titleSearchField={this.props.titleSearchField}
                    clearSearch={this.clearSearch}
                />
            {this.props.displayedPlaylist.length > 0 ? this.props.displayedPlaylist.map((song) => 
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

const mapStateToProps = (state) => {
    return {
        AllSongsList: state.AllSongsList,
        displayedPlaylist: state.displayedPlaylist,
        yearSearchField: state.yearSearchField,
        titleSearchField: state.titleSearchField,
        artistSearchField: state.artistSearchField,
        playlist: state.playlist
    }
}

const mapDispatchToProps = {
    setDisplayedPlaylist,
    changeYearSearchField,
    changeArtistSearchField,
    changeTitleSearchField,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllSongsArea);