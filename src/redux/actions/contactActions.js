import * as types from "./actionTypes";
import * as contactAPI from "../../api/contactAPi";

export function createContact(contact) {
    // debugger;
    return { type: types.CREATE_CONTACT, contact }
}

export function loadContactsSuccess(contacts) {
    return { type: types.LOAD_CONTACTS_SUCCESS, contacts }
}

export function loadContacts() {
    return function (dispatch) {
        return contactAPI.getContact().then(contacts => {
            console.log("contact", contacts)
            dispatch(loadContactsSuccess(contacts))
        }).catch(error => {
            throw error;
        })
    }
}