import { Increment, Decrement } from '../Action'
export default (state, action) => {
    switch (action.type) {
        case Increment:
            return { ...state, count: state.count + 1 }
        case Decrement:
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}