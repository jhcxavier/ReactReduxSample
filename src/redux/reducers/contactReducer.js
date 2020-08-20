import * as types from "../actions/actionTypes";

export default function contactReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_CONTACT:
            // debugger;
            return [...state, { ...action.contact }]
        case types.LOAD_CONTACTS_SUCCESS:
            return action.contacts
        default:
            return state;
    }
}