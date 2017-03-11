import { initialState } from './initial-state';

export function test(state = {}, action) {
  switch (action.type) {
    case 'SET_TEST':
      return Object.assign({}, state, {
        test: action.test
      })
    default:
      return state
  }
}