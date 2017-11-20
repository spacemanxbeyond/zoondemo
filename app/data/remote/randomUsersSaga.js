import { FETCHING_RANDOM_USERS_DATA, FETCHING_RANDOM_USERS_DATA_SUCCESS, FETCHING_RANDOM_USERS_DATA_FAILURE } from '../../actions/actionTypes';
import { put, takeEvery } from 'redux-saga/effects'
import getRandomUsers from './randomUsersApi'

export function* fetchRandomUsersData (action) {
    try {
        const data = yield getRandomUsers();
        yield put({ type: FETCHING_RANDOM_USERS_DATA_SUCCESS, data })
    } catch (e) {
        yield put({ type: FETCHING_RANDOM_USERS_DATA_FAILURE })
    }
}
