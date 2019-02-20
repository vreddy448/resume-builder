import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export function configureStore(preloadedState) {

  return createStore(
    rootReducer,
    preloadedState,

    applyMiddleware (
      thunkMiddleware
    )
      /*+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
  )
}