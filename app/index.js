import React, {Component} from 'react';
import {Provider} from 'react-redux';
import MainAppNavigator from './config/mainNavConfig';
import configureStore from './store'

const store = configureStore();

export default class App extends Component {
    render() {
        return (<Provider store={store}>
            <MainAppNavigator/>
        </Provider>)
    }
}

