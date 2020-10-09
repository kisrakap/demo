export function fetchData() {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
        fetch('https://api.tvmaze.com/shows')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: 'SET_TVSHOWS',
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

