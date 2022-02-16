import { ADDITION } from "../constants/actionTypes"



const initialState = {
    sum: 0
}

const reducerAddition = (state = initialState, { type, x, y }) => {
    if (type === ADDITION) {
        // return { ...state, sum: payload.val1 + payload.val2 }
        return { ...state, sum: x + y }
    } else {
        return state
    }
}

export default reducerAddition