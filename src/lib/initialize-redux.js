import { combineReducers } from 'redux';
import { store } from './../state/store';

export function initializeRedux(reducers, initialState) {
  const combinedReducers = combineReducers(reducers);
  return store(combinedReducers, initialState);
}