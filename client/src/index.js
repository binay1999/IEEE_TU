import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);


   
ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

