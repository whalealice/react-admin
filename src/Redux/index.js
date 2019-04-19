import { combineReducers } from 'redux'
import table from './table'
import login from './login'

const reducer = combineReducers({ table, login })
export default reducer
