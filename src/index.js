import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';


// an object that contain properties of those inputs
// "feeling", "understand", "support", "comments"
// instead of living local in their form, they can go here
const feedback = {
    feeling: '',
    understand: '',
    support: '',
    comments: '',
}

// initial state would be the feedback, and depend on the action.type
// it will add the value of those input into the property
const feedbackReducer = (state = [feedback], action) => {
    switch (action.type) {
        case "FEELING":
            return {...state, feeling: action.payload}
        case "UNDERSTAND":
            return {...state, understand: action.payload}
        case "SUPPORT":
            return {...state, support: action.payload}
    }
    return state;
}

const store = createStore(
    combineReducers({
        feedbackReducer
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
