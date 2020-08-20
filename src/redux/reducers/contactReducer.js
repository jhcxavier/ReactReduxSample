export default function contactReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_CONTACT":
            // debugger;
            return [...state, { ...action.contact }]
        default:
            return state;
    }
}