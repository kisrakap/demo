import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {search} from '../store/action/SearchAction'
import { DebounceInput } from 'react-debounce-input'
import { useHistory } from 'react-router'

const SearchForm = () =>{
    let dispatch = useDispatch()
    const [input, setInput] = useState('')
    let history = useHistory()

    let handleinput = (e)=> {
        history.push('/search')
        dispatch(search(e.target.value))
        setInput('')
    }

    return (
        <div className="ml-1 d-flex align-items-end">
            <DebounceInput
            type="text"
            datatestid="qsearch-box"
            className="form-control flex" 
            placeholder="Search Tv Show"
            minLength={2}
            debounceTimeout={900}
            onChange = {(e) => handleinput(e)}
            value = {input}
            />
        </div>
    )
}

export default SearchForm