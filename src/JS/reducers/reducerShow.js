import { TOGGLE } from "../constants/actionTypes"


const initialState = {
    show: false
}

const reducerShow = (state=initialState, { type }) => {
    if (type === TOGGLE) {
        return { ...state, show: !state.show }
    } else {
        return state
    }
}

export default reducerShow