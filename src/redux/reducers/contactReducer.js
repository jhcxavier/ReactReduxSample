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
        case types.LOAD_SEARCH_SUCCESS:
            console.log("state", state)
            console.log("Action.typeSearch", action.typeSearch)
            console.log("Action", action)
            let type = action.typeSearch.type
            let value = action.typeSearch.value
            let test = state
            return !value ? test : state.filter((contact) => {
                return contact[type].includes(value)
            })

        default:
            return state;
    }
}
