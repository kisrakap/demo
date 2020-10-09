import React, { useEffect,  useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

const SearchPage = () =>{
  const data = useSelector(state => state.TvShowReducer.listSearch) 
  let loading = useSelector(state => state.TvShowReducer.loading)

  // console.log(data, "ini searh");
  if (loading) return <div className="text-center m-5 p-5 mt-5 ">
                        <div className="spinner-border m-5 p-5 mt-5" role="status">
                          <span className="sr-only m-5 p-5">Loading...</span>
                        </div>
                      </div>                   

  return (
    <div className="containter-lg p-3 m-0">
        <div className="text-center"><h1>Search Tv Show</h1></div>
        
        <div className="row row-cols-6 m-2 p-2 shadow-lg rounded">
           {
            data.map((tvShow) =>{
                  return <div className="col m-0 p-2 text-left w-100 h-100 " key={tvShow.show.id}>
                            <div className="rounded shadow-sm m-0 p-0 text-left card w-auto h-auto" style={{ width: '15rem'}}>
                                <div className="card-body m-0 p-1">
                                    <h5 className="card-title m-0 p-1">{tvShow.show.name}</h5>
                                    <small className="card-text m-0 p-1"><b>Genres: </b>{tvShow.show.genres.join(" ")}</small>
                                    <br/>
                                    <Link className="btn btn-primary text-light mr-3 m-0 p-1 " to={`/detail/${tvShow.show.id}`}>detail</Link>
                                </div>
                            </div>
                        </div>}
            )
           }  
        </div>            
    </div>
  )
}

export default SearchPage