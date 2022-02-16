import { ADDITION } from "../constants/actionTypes"

// export const addition = (payload) => {
//     return {
//         type: ADDITION,
//         payload
//     }
// }
export const addition = (x, y) => {
    return {
        type: ADDITION,
        x,
        y
    }
}