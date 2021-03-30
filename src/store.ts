import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';

// const ping: Middleware = (store) => (next) => (action) => {
//   console.log('ping');
//   next(action);
// };

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
