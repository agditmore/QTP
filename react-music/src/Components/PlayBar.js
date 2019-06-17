import React from 'react';
import Next from './Images/Next.png';
import { connect } from 'react-redux';
import { toggleShuffleFlag, changeShuffledPlaylist} from './../redux/actions';

class PlayBar extends React.Component {
    changeSong = (direction) => {
        let currentPlaylist;
        if (!this.props.shuffle){
            currentPlaylist = this.props.playlist;
        }
        else {
            currentPlaylist = this.props.shuffledPlaylist;
        }
        const currentIndex = currentPlaylist.indexOf(this.props.currentSong);
        if (direction === "prev") {
          currentIndex > 0 
          ? this.props.playSong(currentPlaylist[currentIndex-1])
          : this.props.playSong(currentPlaylist[currentPlaylist.length-1])
        }
        else if (direction === "next") {
          currentIndex < currentPlaylist.length-1
          ? this.props.playSong(currentPlaylist[currentIndex+1])
          : this.props.playSong(currentPlaylist[0])
        }
    }

    changePlaylist = () => {
        const shuffledPlaylist = this.props.playlist.map((song) => song);
        for (let i = shuffledPlaylist.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]]
        }

        changeShuffledPlaylist(shuffledPlaylist)
        toggleShuffleFlag(this.props.shuffle)

        // this.setState({
        //     shuffledPlaylist: shuffledPlaylist,
        //     shuffle: !this.props.shuffle,
        // })
        this.props.playSong(shuffledPlaylist[0])
    }

    render() {
        if (Object.keys(this.props.currentSong).length !== 0 && this.props.playlist.length > 0) {
            return(
                <div>
                    <h2>Currently Playing </h2> 
                    <div className="all-songs-song-container">
                        <button onClick={() => this.changeSong("prev")}><img src={Next} className="rotated-arrow" alt="Previous" /></button>
                        {this.props.currentSong.title}
                        <button onClick={() => this.changeSong("next")}><img src={Next} className="arrow" alt="Next" /></button>
                        <button onClick={() => this.changePlaylist()}>Shuffle</button>
                    </div>
                </div>
            )
        }
        else if (Object.keys(this.props.currentSong).length !== 0 && this.props.playlist.length === 0){
            return(
                <div>
                    <h2>Currently Playing</h2>
                    <div className="all-songs-song-container"> 
                        {this.props.currentSong.title}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div> 
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        shuffledPlaylist: state.shuffledPlaylist,
        shuffle: state.shuffle,
        currentSong: state.currentSong,
        playlist: state.playlist
    }
}

const mapDispatchToProps = {
    changeShuffledPlaylist,
    toggleShuffleFlag
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);