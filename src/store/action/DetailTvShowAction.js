export function fetchDetail(tvShowId) {
    
    return (dispatch, getState) => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
        fetch(`https://api.tvmaze.com/shows/${tvShowId}`)
            .then((resp) => resp.json())
            .then((data) => {
                dispatch({
                    type: 'SET_TVSHOWS_DETAIL',
                    payload: data
                })
                dispatch({
                    type: 'LOADING',
                    payload: false
                })
            })
    }
}