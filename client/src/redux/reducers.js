const initState = {
    username: '',
    answers: {},
    destination: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state,
                username: action.value
            }
        case "RESET":
            return initState
        
        case "ADD_ANSWERS":
            return {
                ...state,
                answers: action.value
            }
        case "ADD_DEST":
            return {
                ...state,
                destination: action.value
            }
    
        default:
            return state;
    }
}

export default reducer
