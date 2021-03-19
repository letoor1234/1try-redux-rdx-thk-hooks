//simple reducer!!
const reducer =(state={}, action)=> {
    switch(action.type){
        case "GET_MOVIES":{
            return {
                ...state,
                loading: true
            };
        };
        case "SUCCESS_MOVIES":{
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        };
        default:
            return state
    }
}

export default reducer