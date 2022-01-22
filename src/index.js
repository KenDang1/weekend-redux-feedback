import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';



const store = createStore(
    combineReducers({

    }),
    applyMiddleware(logger),
); // end of store

ReactDOM.render(
    // with this all other components can use the store
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
