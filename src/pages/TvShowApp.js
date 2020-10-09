import React, { useEffect,  useState} from 'react'
import TvCard from '../component/TvCard'
import { useSelector, useDispatch} from 'react-redux'
import { fetchData } from '../store/action/ListTvShowAction'

const TvShowApp = () =>{
  const [title, setTitle] = useState('Tv Show App')
  const data = useSelector(state => state.TvShowReducer.listTvShows) 
  let loading = useSelector(state => state.TvShowReducer.loading)
  
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchData())
  }, [])


  if (loading) return <div className="text-center m-5 p-5 mt-5 ">
                        <div className="spinner-border m-5 p-5 mt-5" role="status">
                          <span className="sr-only m-5 p-5">Loading...</span>
                        </div>
                      </div>                   

  return (
    <div className="containter-lg p-3 m-0">
        <div className="text-center"><h1>{title}</h1></div>
        
        <div className="row row-cols-6 m-2 p-2 shadow-lg rounded">
           {
            data && data.map((tvShow) =>{
                  return <TvCard key={tvShow.id} tvShow={tvShow}/>
            })
           }  
        </div>            
    </div>
  )
}

export default TvShowApp