import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, Icon, StyleSheet} from 'react-native';
import {StackNavigator, DrawerNavigator, NavigationActions} from 'react-navigation';
import Images from '@assets/images';
import DrawerButton from '../components/DrawerButton';

// Screens
import HomeScreen from '../screens/HomeScreen'
import PlanetsScreen from '../screens/PlanetsScreen'
import CommunityScreen from '../screens/CommunityScreen'
import GameScreen from '../screens/GameScreen';
import DrawerMenu from '../components/DrawerMenu';
import AboutScreen from "../screens/AboutScreen";
import SettingsScreen from '../screens/SettingsScreen';

let SlideFromRightTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const outputRange = [300, 1, 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange,
    });

    const translateX = position.interpolate({
        inputRange,
        outputRange,
    });

    return {
        opacity,
        transform: [
            {translateX}
        ]
    };
};

let TransitionConfiguration = () => {
    return {
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {
            const {position, scene} = sceneProps;
            const {index} = scene;

            return SlideFromRightTransition(index, position);
        }
    }
};

const stackRouteConfiguration = {
    Home: {screen: HomeScreen},
    Planets: {screen: PlanetsScreen},
    Community: {screen: CommunityScreen},
    Game: {screen: GameScreen},
    About: {screen: AboutScreen},
    Settings: {screen: SettingsScreen},
};

const stackNavigatorConfiguration = {
    headerMode: 'screen',
    initialRouteName: 'Home',
    transitionConfig: TransitionConfiguration,
};

const MainStackNavigator = StackNavigator(stackRouteConfiguration, stackNavigatorConfiguration);


const drawerRouteConfiguration = {
    Home: {screen: MainStackNavigator},
};

const drawerNavigatorConfiguration = {
    drawerPosition: 'right',
    contentComponent: DrawerMenu,
    drawerWidth: 300,
};

const MainAppNavigator = DrawerNavigator(drawerRouteConfiguration, drawerNavigatorConfiguration);


//Ref: https://github.com/react-community/react-navigation/issues/271
const navigateOnce = (getStateForAction) => (action, state) => {
    const {type, routeName} = action;
    return (
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
    ) ? state : getStateForAction(action, state);
    // you might want to replace 'null' with 'state' if you're using redux (see comments below)
};

MainAppNavigator.router.getStateForAction = navigateOnce(MainAppNavigator.router.getStateForAction);
MainStackNavigator.router.getStateForAction = navigateOnce(MainStackNavigator.router.getStateForAction);

export default MainAppNavigator;