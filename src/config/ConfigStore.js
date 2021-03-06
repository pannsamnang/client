import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunkMiddleware)
)

export default function configureStore() {
  return store;
}
