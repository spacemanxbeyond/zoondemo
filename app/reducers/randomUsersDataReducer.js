import { FETCHING_RANDOM_USERS_DATA, FETCHING_RANDOM_USERS_DATA_SUCCESS, FETCHING_RANDOM_USERS_DATA_FAILURE } from '../actions/actionTypes'

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default function randomUsersDataReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING_RANDOM_USERS_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_RANDOM_USERS_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCHING_RANDOM_USERS_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}
