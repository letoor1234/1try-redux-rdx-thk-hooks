import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from './redux/actions/moviesAction'

const App = (props) => {
    //getting useDispatch for shoot actions
    const dispatch = useDispatch();
    //useSelector takes props from redux store
    const state = useSelector(state => state);
    // state, setState = useState(firstValue)
    const [ movies, setMovies ] = useState([]);

    useEffect(()=>{
        if(movies.length === 0){
            //dispatch shoots an action of the redux store
            dispatch(fetchMovies());
            //same that this.setState({})
            setMovies([state.movies.movies])
        }
    })

    return(
        <div>
            <h1>
                Holaaaaaaaaaaaaaa!!!!
            </h1>
        </div>
    )
}

export default App;