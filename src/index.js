import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import  { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);


