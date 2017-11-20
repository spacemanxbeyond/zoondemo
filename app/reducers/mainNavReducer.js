import MainAppNavigator from '../config/mainNavConfig';

const mainNavReducer = (state, action) => {
    if (action.type === 'Home') {
        return {...state, index: 0}
    } else {
        return MainAppNavigator.router.getStateForAction(action, state)
    }
};

export default mainNavReducer;