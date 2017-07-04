import {createStore,  applyMiddleware} from 'redux';
import countReducer from '../reducers/reducer'
import {createLogger} from 'redux-logger';

//reduxのlogを残してくれるようなstoreの作成

export default function configureStore() {
  const logger = createLogger({logger:console});
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
  const store = createStoreWithMiddleware(countReducer);
  return store;
}
