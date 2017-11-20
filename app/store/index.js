import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import mainNavReducer from '../reducers/mainNavReducer';
import gameReducer from '../reducers/gameReducer';
import randomUsersDataReducer from '../reducers/randomUsersDataReducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
    nav: mainNavReducer,
    game: gameReducer,
    randomUsersData: randomUsersDataReducer,
});

export default function configureStore() {
    const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store
}