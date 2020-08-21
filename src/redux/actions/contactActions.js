import * as types from "./actionTypes";
import * as contactAPI from "../../api/contactAPi";

// export function createContact(contact) {
//     // debugger;
//     return { type: types.CREATE_CONTACT, contact }
// }

export function loadContactsSuccess(contacts) {
    return { type: types.LOAD_CONTACTS_SUCCESS, contacts }
}

export function updateContactSuccess(contact) {
    console.log("function", contact)
    return { type: types.UPDATE_CONTACT_SUCCESS, contact }
}
export function createContactSuccess(contact) {
    console.log("functionCreating", contact)
    return { type: types.CREATE_CONTACT_SUCCESS, contact }
}

export function loadContacts() {
    return function (dispatch) {
        return contactAPI.getContact().then(contacts => {
            console.log("contact", contacts)
            dispatch(loadContactsSuccess(contacts.slice().reverse()))
        }).catch(error => {
            throw error;
        })
    }
}

export function saveContact(contact) {
    debugger;
    console.log("saving Contact", contact)
    return function (dispatch, getState) {
        return contactAPI
            .saveContact(contact)
            .then(savedContact => {
                console.log("savedContact", savedContact)
                dispatch(createContactSuccess(savedContact))
            }).catch(error => {
                throw error
            })
    }
}

export function updateContact(contact) {
    console.log("update", contact)
    return function (dispatch, getState) {
        return contactAPI
            .updateContact(contact)
            .then(savedContact => {
                console.log("savedContact", savedContact)
                dispatch(updateContactSuccess(savedContact))

            }).catch(error => {
                throw error
            })
    }
}