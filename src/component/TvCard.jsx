import React from 'react'
import { useHistory , useRouteMatch} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {addToFavorite} from '../store/action/FavoriteAction'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
const TvCard = ({tvShow}) =>{

    const history = useHistory()
    const dispatch = useDispatch()

    function addToFav() {
        dispatch(addToFavorite(tvShow))
    }
        return (
            <div className="col m-0 p-2 text-left w-100 h-100 ">
                <div className="rounded shadow-sm m-0 p-0 text-left card w-auto h-auto" style={{ width: '15rem'}}>
                   <img src={tvShow.image.medium} alt="..." className="w-100 h-auto"/>
                    <div className="card-body m-0 p-1">
                        <h5 className="card-title m-0 p-1">{tvShow.name}</h5>
                        <small className="card-text m-0 p-1"><b>Genres: </b>{tvShow.genres.join(" ")}</small>
                        <br/>
                        <Link className="btn btn-primary text-light mr-3 m-0 p-1 " to={`/detail/${tvShow.id}`}>detail</Link>
                        <button onClick={addToFav} className="btn btn-dark m-0 p-1 ">Add To Favorites</button>
                    </div>
                </div>
            </div>
        )
    }

export default TvCard