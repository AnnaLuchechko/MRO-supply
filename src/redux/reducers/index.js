import { combineReducers } from 'redux'
import baseReducers from './base'
import mroReducers from './mro'

const reducers = combineReducers({
  baseReducers,
  mroReducers,
});

export default reducers
