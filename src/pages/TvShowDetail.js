import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchDetail } from '../store/action/DetailTvShowAction'
import { useSelector, useDispatch } from "react-redux"
import {addToFavorite} from '../store/action/FavoriteAction'

function TvShowDetail () {
  const { tvShowId } = useParams()
  const tvShow = useSelector(state => state.TvShowReducer.tvShowDetail)
  let loading = useSelector(state => state.TvShowReducer.loading)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchDetail(tvShowId))
  }, [])

  function addToFav() {
    dispatch(addToFavorite(tvShow))
  }

  if (loading) return <div className="text-center m-5 p-5 mt-5 ">
                        <div className="spinner-border m-5 p-5 mt-5" role="status">
                          <span className="sr-only m-5 p-5">Loading...</span>
                        </div>
                      </div>                   


  return (<>
  <div className="container">
    <div className="card mb-3 m-3 " style={{maxWidth: "720px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            {/* <img src={tvShow.image.medium} alt="..." className="w-100 h-auto"/>  */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{tvShow.name}</h5>
              <p className="card-text"><b>Summary: </b>{tvShow.summary}</p>
              <p className="card-text"><small className="text-muted"><b>Language : </b>{tvShow.language}</small></p>
              <p className="card-text"><small className="text-muted"><b>Genre : </b>{tvShow.genres}</small></p>
              <p className="card-text"><small className="text-muted"><b>Link: </b> <a href={tvShow.officialSite}>{tvShow.officialSite}</a></small></p>
              <p className="card-text"><small className="text-muted"><b>Premired : </b>{tvShow.premiered}</small></p>
              <button onClick={addToFav} className="btn btn-dark m-0 p-1 ">add to favorites</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  </>
  )
}

export default TvShowDetail 