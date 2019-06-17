export const setDisplayedPlaylist = (payload) => ({ type: SET_DISPLAYED_PLAYLIST, payload})
export const changeYearSearchField = (payload) => ({ type: CHANGE_YEAR_SEARCH_FIELD, payload})
export const changeTitleSearchField = (payload) => ({ type: CHANGE_TITLE_SEARCH_FIELD, payload})
export const changeArtistSearchField = (payload) => ({ type: CHANGE_ARTIST_SEARCH_FIELD, payload})
export const changeShuffledPlaylist = (payload) => ({ type: CHANGE_SHUFFLED_PLAYLIST, payload})
export const toggleShuffleFlag = (payload) => ({ type: TOGGLE_SHUFFLE_FLAG, payload})
export const toggleShowPlaylistFlag = (payload) => ({ type: TOGGLE_SHOW_PLAYLIST_FLAG, payload})
export const setPlaylist = (payload) => ({ type: SET_PLAYLIST, payload})
export const setCurrentSong = (payload) => ({ type: SET_CURRENT_SONG, payload})

export const SET_DISPLAYED_PLAYLIST = 'SET_DISPLAYED_PLAYLIST'
export const CHANGE_YEAR_SEARCH_FIELD = 'CHANGE_YEAR_SEARCH_FIELD'
export const CHANGE_TITLE_SEARCH_FIELD = 'CHANGE_TITLE_SEARCH_FIELD'
export const CHANGE_ARTIST_SEARCH_FIELD = 'CHANGE_ARTIST_SEARCH_FIELD'
export const CHANGE_SHUFFLED_PLAYLIST = 'CHANGE_SHUFFLED_PLAYLIST'
export const TOGGLE_SHUFFLE_FLAG = 'TOGGLE_SHUFFLE_FLAG'
export const TOGGLE_SHOW_PLAYLIST_FLAG = 'TOGGLE_SHOW_PLAYLIST_FLAG'
export const SET_PLAYLIST = 'SET_PLAYLIST'
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'