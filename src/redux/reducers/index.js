import { combineReducers } from "redux";
import contacts from "./contactReducer";
import apiCallInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    contacts,
    apiCallInProgress

})

export default rootReducer;