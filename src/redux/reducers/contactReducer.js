import * as types from "../actions/actionTypes";

export default function contactReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_CONTACT:
            // debugger;
            return [...state, { ...action.contact }]
        default:
            return state;
    }
}