import swal from 'sweetalert';

export function addToFavorite(tvShow) {
    console.log(tvShow, "masuk nggak ?");
    return (dispatch, getState) => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
        const favorites = getState().FavoriteReducer.Favorites
        // console.log(favorites, "ini di aksii");
        if(favorites.some(favorite => favorite.id === tvShow.id)) {
            swal('Tv Shows is already in favorites', '', 'info')
            dispatch({
                type: 'LOADING',
                payload: false
            })
        } else {
            swal('Tv Show has successfully been added to favorites', '', 'success')
            dispatch({
                type: 'ADD_TO_FAVORITES',
                payload: tvShow
            })
            dispatch({
                type: 'LOADING',
                payload: false
            })
        }
    }
} 