import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function contactReducer(state = initialState.contacts, action) {
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