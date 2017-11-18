import {combineReducers, createStore} from "redux";
import mainNavReducer from '../reducers/mainNavigatorReducer';
import gameReducer from '../reducers/gameReducer';

console.log('********** Create Store');
const appReducer = combineReducers({
    nav: mainNavReducer,
    game:gameReducer,
});

const store = createStore(appReducer);

export default store;