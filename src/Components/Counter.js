import React from 'react'
import { connect } from "react-redux"
import { increment, decrement, reset } from '../JS/actions/actionCounter'

const Counter = (props) => {
    return (
        <div>
            <h1>Counter</h1>
            <h2>{props.count}</h2>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.reset} >Reset</button>
        </div>
    )
}

const msp = (state) => {
    return {
        count: state.reducerCounter.count
    }
}

// const mdp = (dispatch) => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement())
//     }
// }

// const mdp = {
//     increment,
//     decrement,
//     reset
// }

//3
export default connect(msp, { increment, decrement, reset })(Counter)

//2- export default connect(msp, mdp)(Counter)

//1- export default connect(null, mapDispatchToProps)(Counter)