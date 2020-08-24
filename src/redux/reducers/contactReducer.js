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
        case types.DELETE_CONTACT_OPTIMISTIC:
            return state.filter(contact => contact._id !== action.contact._id)
        // case types.LOAD_SEARCH_SUCCESS:
        //     console.log("state", state)
        //     console.log("typeSearch".action.typeSearch)

        // state.filter((contact) => {

        //     if (type === "email") {
        //         console.log("type", type)
        //         return contact.email.includes(value);
        //     } else if (type === "phone") {
        //         return contact.phone.includes(value);
        //     }
        //     return true;
        // })
        default:
            return state;
    }
}
