export default function contactReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_CONTACT":
            return [...state, { ...action.contact }]
        default:
            return state;
    }
}