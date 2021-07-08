import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import "./index.css"
import { ToastProvider } from 'react-toast-notifications';
import rootReducer from './store/reducers';
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose,
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <ToastProvider>
            <Router>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </ToastProvider>
    </Provider>,
    document.getElementById('root'),
);
