import { createStore } from 'redux'
import reducer from './Reducer'
const initValue = {
    'count': 0,
}
const store = createStore(reducer, initValue)
export default store