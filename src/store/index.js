import { createStore, combineReducers } from 'redux'
import * as home from './home/reducer'

const store = createStore(
  combineReducers(home)
)
store.subscribe(() => console.log(store.getState()))

export default store
