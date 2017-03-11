import { createStore } from 'redux';
import { reducers } from './reducers';

export function store(reducer, initialState) {
  return createStore(reducer, initialState);
}