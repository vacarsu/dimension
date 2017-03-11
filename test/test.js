import test from 'ava';
import 'babel-core/register';
import { createStore } from 'redux';
import { store }from './../src/state/store';

test('test dim store should equal redux store', t => {
  let dimStore = store(function test(state = {}, action) {
    switch (action.type) {
      case 'SET_TEST':
        return Object.assign({}, state, {
          test: action.test
        })
      default:
        return state
    }
  },
  { test: 'test' });

  console.log(dimStore);
  let reduxStore = createStore(function test(state = {}, action) {
    switch (action.type) {
      case 'SET_TEST':
        return Object.assign({}, state, {
          test: action.test
        })
      default:
        return state
    }
  },
  { test: 'test' });
  console.log(reduxStore);

  t.is(dimStore, reduxStore);
});