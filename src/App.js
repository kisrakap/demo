import React from 'react'
import TvShowApp from './pages/TvShowApp'
import Rating from './pages/Rating'
import TvShowDetail from './pages/TvShowDetail'
import Favorites from './pages/Favorites'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store"
import SearchPage from './pages/SearchPage'
import Navbar from './component/Navbar'


const App = () =>{
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>

        <Switch>
          <Route exact path='/'>
            <TvShowApp />
          </Route>
          <Route path='/rating'>
            <Rating/>
          </Route> 
          <Route path='/detail/:tvShowId'>
            <TvShowDetail/>
          </Route>
          <Route path='/favorites'>
            <Favorites/>
          </Route>
          <Route path='/search'>
            <SearchPage/>
          </Route>
        </Switch>
    </Router>
    </Provider>
  )
}
export default App
