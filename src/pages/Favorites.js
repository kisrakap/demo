import React, { useState, useEffect } from 'react'

import { useSelector } from "react-redux"    
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
import TvCard from '../component/TvCard'


const Favorites = () =>{
    const faves = useSelector(state => state.FavoriteReducer.Favorites)
    let loading = useSelector(state => state.FavoriteReducer.loading)
    const [isFavorite, setIsFavorite] = useState(true)

    if (loading) return <div className="text-center m-5 p-5 mt-5 ">
                            <div className="spinner-border m-5 p-5 mt-5" role="status">
                                <span className="sr-only m-5 p-5">Loading...</span>
                            </div>
                        </div>                   

    return (
    <div className="containter-lg p-3 m-0" >
            <div className="row row-cols-5 m-2 p-2 shadow-lg rounded">
            {
                faves && faves.map((tvShow) => {
                        return (
                            <TvCard key={tvShow.id} tvShow={tvShow}/>
                        // <div className="col m-0 p-2 text-left w-100 h-100 " key={tvShow.tvShow.id}>
                        //     <div className="rounded shadow-sm m-0 p-0 text-left card w-auto h-auto" style={{ width: '15rem'}}>
                        //     <img src={tvShow.tvShow.image.medium} alt="..." className="w-100 h-auto"/>
                        //     <div className="card-body m-0 p-1">
                        //         <h5 className="card-title m-0 p-1">{tvShow.tvShow.name}</h5>
                        //         <small className="card-text m-0 p-1"><b>Genres: </b>{tvShow.tvShow.genres}</small>
                        //         <br/> 
                        //         <small className="card-text m-0 p-1"><b>Rating: </b>{tvShow.tvShow.rating.average}</small>
                        //         <br/>
                        //         <Link className="btn btn-primary text-light mr-3 m-0 p-1 " to={`/detail/${tvShow.tvShow.id}`}>detail</Link>
                        //         </div>
                        //     </div>
                        // </div>
                        )
                })
            }
            </div>
    </div>
    )
}

export default Favorites