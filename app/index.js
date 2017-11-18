'use strict';
import React, {Component} from 'react';

// Navigation
import MainAppNavigator from './config/mainNavigatorConfig'

// Redux
import {Provider} from 'react-redux'
import store from './store'

export default class App extends Component {

    render() {
        return (<Provider store={store}>
            <MainAppNavigator/>
        </Provider>)
    }
}

