import { takeEvery } from 'redux-saga/effects';
import {fetchRandomUsersData} from '../data/remote/randomUsersSaga';

export default function* rootSaga() {
    yield takeEvery('FETCHING_RANDOM_USERS_DATA', fetchRandomUsersData);
}