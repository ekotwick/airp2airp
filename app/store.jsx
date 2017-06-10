import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

export default store
