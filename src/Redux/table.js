import {createAction,handleActions} from 'redux-actions'
import Immutable from 'immutable'

const createInitState = () =>
    Immutable.fromJS({
        count: 0,
    })
const $$initialState = createInitState()
export const INCEREMENT_COUNT = 'increment count'
export const DECREMENT_COUNT = 'decrement count'
const handlers = {
    [INCEREMENT_COUNT]: ($$state, action) => {
        const _num = action.payload + 1
        return $$state.set('count', _num)
    },
    [DECREMENT_COUNT]: ($$state, action) => {
        const _num = action.payload - 1
        return $$state.set('count', _num)
    },
}
export const onIncrement = createAction(INCEREMENT_COUNT, opts => opts)
export const onDecrement = createAction(DECREMENT_COUNT, opts => opts)
//   actions[type.MOVIE_DETAIL + type.FETCH_SUCCESS_SUFFIX] = (state, action) => {
//     return {
//       ...state,
//       movieDetail: action.payload.data
//     }
//   }
  
//   actions[type.MOVIE_COMMENT_LIST + type.FETCH_SUCCESS_SUFFIX] = (state, action) => {
//     return {
//       ...state,
//       commentData: action.payload.data
//     }
//   }
  
  const reducer = handleActions(handlers, $$initialState)
  
  export default reducer