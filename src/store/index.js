import { createStore, combineReducers } from 'redux'
import * as home from './home/reducer'
console.log('home', home)

const store = createStore(
  combineReducers({
    ...home
  })
)
store.subscribe(() => console.log(store.getState()))

export default store
