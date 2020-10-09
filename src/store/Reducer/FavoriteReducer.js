const initialState = {
    Favorites: []
}

const FavoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_FAVORITES':
   
            return {...state, Favorites: state.Favorites.concat(action.payload)} 
        default:
            return state
    }
}

export default FavoriteReducer 