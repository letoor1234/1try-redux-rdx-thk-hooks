const GET_MOVIES = "GET_MOVIES"
const SUCCESS_MOVIES = "SUCCESS_MOVIES"

const getMovies = payload => ({
    type: GET_MOVIES,
    payload
})

const successMovies = payload =>({
    type: SUCCESS_MOVIES,
    payload
})
//REDUX-THUNK
export const fetchMovies = payload =>{
    return dispatch =>{
        //calls to getMovies action
        dispatch(getMovies());

        //getting data from api
        fetch('http://api.tvmaze.com/schedule')
            .then((res)=>{
                return res.json();
            })
            .then((json)=>{
                //calls to successMovies after call responses
                dispatch(successMovies(json));
            })
    }
}