import React from 'react'
import {useState, useEffect } from 'react'
import TvCard from '../component/TvCard'
import { fetchData } from '../store/action/ListTvShowAction'
import { useSelector, useDispatch} from 'react-redux'

const Rating = () =>{

  const tvShows = useSelector(state => state.TvShowReducer.listTvShows) 
  const loading = useSelector(state => state.TvShowReducer.loading)
  const dispatch = useDispatch()
  console.log(tvShows, "ini data qweqwe");
  
  useEffect(() => {
    dispatch(fetchData())
  }, [])
 
  if (loading) return <div className="text-center m-5 p-5 mt-5 ">
                        <div className="spinner-border m-5 p-5 mt-5" role="status">
                          <span className="sr-only m-5 p-5">Loading...</span>
                        </div>
                      </div>                   

  
  return (
    <div className="containter-lg p-3 m-0" >
          <h1>Rating above 7</h1>
         <div className="row row-cols-6 m-2 p-2 shadow-lg rounded">
          {
              tvShows && tvShows.map((tvShow) => {
                  if (tvShow.rating.average >= 7){
                      return <TvCard key={tvShow.id} tvShow={tvShow} />
                  }
              })
          }
         </div>
    </div>
  )

}

export default Rating