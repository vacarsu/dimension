import { createStore } from 'redux';
import { reducers } from './reducers';

export var state;

export function store(reducer, initialState) {
  return state = createStore(reducer, initialState);
}