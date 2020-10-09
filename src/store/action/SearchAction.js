export function search(query) {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'SET_TVSHOWS_SEARCH',
                payload: data
            })
            dispatch({
                type: 'LOADING',
                payload: false
            }) 
        })
        .catch(err => {
            console.log(err);
        })
    }
}

