import * as types from "./actionTypes";

export function createContact(contact) {
    // debugger;
    return { type: types.CREATE_CONTACT, contact }
}