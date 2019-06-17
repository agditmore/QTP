import AllSongsList from './../SongData';
import { 
    SET_DISPLAYED_PLAYLIST, 
    CHANGE_YEAR_SEARCH_FIELD,
    CHANGE_TITLE_SEARCH_FIELD,
    CHANGE_ARTIST_SEARCH_FIELD,
    CHANGE_SHUFFLED_PLAYLIST,
    TOGGLE_SHUFFLE_FLAG,
    TOGGLE_SHOW_PLAYLIST_FLAG,
    SET_PLAYLIST,
    SET_CURRENT_SONG 
} from './actions'

const initialState = {
    AllSongsList: AllSongsList.songs,
    displayedPlaylist: AllSongsList.songs,
    yearSearchField: '',
    titleSearchField: '',
    artistSearchField: '',
    shuffledPlaylist: [],
    shuffle: false,
    showPlaylist: true,
    playlist: [],
    currentSong: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DISPLAYED_PLAYLIST:
            return {...state, displayedPlaylist: action.payload}
        case CHANGE_YEAR_SEARCH_FIELD:
            return {...state, yearSearchField: action.payload}
        case CHANGE_TITLE_SEARCH_FIELD:
            return {...state, titleSearchField: action.payload}
        case CHANGE_ARTIST_SEARCH_FIELD:
            return {...state, artistSearchField: action.payload}
        case CHANGE_SHUFFLED_PLAYLIST:
            return {...state, shuffledPlaylist: action.payload}
        case TOGGLE_SHUFFLE_FLAG:
            return {...state, shuffle: !action.payload}
        case TOGGLE_SHOW_PLAYLIST_FLAG:
            return {...state, showPlaylist: !action.payload}
        case SET_PLAYLIST:
            return {...state, playlist: action.payload}
        case SET_CURRENT_SONG:
            return {...state, currentSong: action.payload}
        default:
            return state;
    }
}

export default reducer;