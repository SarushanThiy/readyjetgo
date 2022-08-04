import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

<div role='store'></div>

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
