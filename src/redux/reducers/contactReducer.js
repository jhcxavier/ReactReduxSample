import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function contactReducer(state = initialState.contacts, action) {
    switch (action.type) {
        case types.CREATE_CONTACT_SUCCESS:
            // debugger;
            return [...state, { ...action.contact }]
        case types.UPDATE_CONTACT_SUCCESS:
            return state.map(contact =>
                contact._id === action.contact._id ? action.contact : contact)
        case types.LOAD_CONTACTS_SUCCESS:
            return action.contacts
        default:
            return state;
    }
}