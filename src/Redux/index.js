import { combineReducers } from 'redux'
import table from './table'
import user from './login'

const reducer = combineReducers({ table, user })
export default reducer
