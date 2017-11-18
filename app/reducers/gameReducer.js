import * as types from '../actions/actionTypes';

const initialState = {
    correctAnswer: 0,
    incorrectAnswer: 0,
};

export default function counter(state = initialState, action = {}) {
    console.log('Game action:' + action.type);
    switch (action.type) {
        case types.CORRECT:
            return {
                ...state,
                correctAnswer: state.correctAnswer + 1
            };
        case types.INCORRECT:
            return {
                ...state,
                incorrectAnswer: state.incorrectAnswer + 1
            };
        case types.RESET_GAME:
            return {
                ...state,
                correctAnswer: 0,
                incorrectAnswer: 0,
            };
        default:
            return state;
    }
}