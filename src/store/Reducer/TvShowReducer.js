
const initialState = {
    favorites: [],
    listTvShows: [],
    tvShowDetail: {},
    listSearch: [],
    loading: null,
    search: ''
}
const TvShowReducer = (state = initialState, action) => {
    switch(action.type){ 
        case "SET_TVSHOWS":
            let newState = { ...state, listTvShows: action.payload}
            console.log(newState)
            return newState

        case 'SET_TVSHOWS_DETAIL':
            return {...state, tvShowDetail: action.payload} 
        case 'SET_TVSHOWS_SEARCH':
            return {...state, listSearch: action.payload}  
        case 'NOTHING':
            return {...state, listTvShows: state.listTvShows} 
        case 'LOADING':
            return {...state, loading: action.payload}
        default: 
            return state;
    }
};

export default TvShowReducer