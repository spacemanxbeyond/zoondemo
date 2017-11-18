import MainAppNavigator from '../config/mainNavigatorConfig';

const mainNavigatorReducer = (state, action) => {
    if (action.type === 'Home') {
        return {...state, index: 0}
    } else {
        return MainAppNavigator.router.getStateForAction(action, state)
    }
};

export default mainNavigatorReducer;