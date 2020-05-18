import { getAllProducts } from '../actions'
import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default function configureStore() {
  const store = reduxCreateStore(rootReducer, applyMiddleware(...middleware))
  store.dispatch(getAllProducts())
  return store;
}