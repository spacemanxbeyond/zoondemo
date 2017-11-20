import React from 'react';
import {StackNavigator, DrawerNavigator, NavigationActions} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import DrawerMenu from '../components/DrawerMenu';

// Screens
import HomeScreen from '../screens/HomeScreen'
import PlanetsScreen from '../screens/PlanetsScreen'
import CommunityScreen from '../screens/CommunityScreen'
import GameScreen from '../screens/GameScreen';
import AboutScreen from "../screens/AboutScreen";
import SettingsScreen from '../screens/SettingsScreen';

const mainStackRouteConfiguration = {
    Home: {screen: HomeScreen},
    Planets: {screen: PlanetsScreen},
    Community: {screen: CommunityScreen},
    Game: {screen: GameScreen},
    About: {screen: AboutScreen},
    Settings: {screen: SettingsScreen},
};

const mainStackNavigatorConfiguration = {
    headerMode: 'screen',
    initialRouteName: 'Home',
    transitionConfig: getSlideFromRightTransition,
};

const MainStackNavigator = StackNavigator(mainStackRouteConfiguration, mainStackNavigatorConfiguration);

const drawerRouteConfiguration = {
    Home: {screen: MainStackNavigator},
};

const drawerNavigatorConfiguration = {
    drawerPosition: 'right',
    contentComponent: DrawerMenu,
    drawerWidth: 300,
};

const MainAppNavigator = DrawerNavigator(drawerRouteConfiguration, drawerNavigatorConfiguration);

//Credits Ref: https://github.com/react-community/react-navigation/issues/271
// A work around to avoid duplicate navigation routing calls for quick double tapping
const navigateOnce = (getStateForAction) => (action, state) => {
    const {type, routeName} = action;
    return (
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
    ) ? state : getStateForAction(action, state);
};

MainStackNavigator.router.getStateForAction = navigateOnce(MainStackNavigator.router.getStateForAction);
MainAppNavigator.router.getStateForAction = navigateOnce(MainAppNavigator.router.getStateForAction);

export default MainAppNavigator;