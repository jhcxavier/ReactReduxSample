import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:4002/contacts";


export const getContact = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
// export const getContact = () => {
//   return fetch("http://localhost:4002/contacts").then(response => response.json()).then(data => console.log(data));
// }
export function saveContact(contact) {

  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      firstName: contact.firstName,
      lastName: contact.lastName,
      company: contact.company,
      email: contact.email,
      phone: contact.phone

    }),
  }).then(res => res.json())
    .catch(handleError);
}
export function updateContact(contact) {

  return fetch(`http://localhost:4002/contact/${contact._id}`, {
    method: "PUT", // PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      firstName: contact.firstName,
      lastName: contact.lastName,
      company: contact.company,
      email: contact.email,
      phone: contact.phone
    }),
  }).then(res => {
    // console.log("ressss", res)
    return res.json()

  })
    .catch(handleError);
}
export function deleteContact(contact) {
  console.log("contact in delete", contact)
  return fetch(`http://localhost:4002/contact/${contact._id}`, { method: "DELETE" })
}
