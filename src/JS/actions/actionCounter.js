import { DECREMENT, INCREMENT, RESET } from "../constants/actionTypes"


export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const reset = () => {
    return {
        type: RESET
    }
}
