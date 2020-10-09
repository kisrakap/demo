import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import TvShowReducer from './Reducer/TvShowReducer'
import FavoriteReducer from './Reducer/FavoriteReducer'

const reducers = combineReducers({
    TvShowReducer,
    FavoriteReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store 