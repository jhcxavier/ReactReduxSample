import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:4002/contacts";

export const getContact = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
// export const getContact = () => {
//   return fetch("http://localhost:4002/contacts").then(response => response.json()).then(data => console.log(data));
// }
export function saveCourse(contacts) {
  return fetch(baseUrl + (contacts._id || ""), {
    method: contacts._id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(contacts),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(contactId) {
  return fetch(baseUrl + contactId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
