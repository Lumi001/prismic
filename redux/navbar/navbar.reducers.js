const INITIAL_STATE = { leftDropdown: false, rightDropdown: false };

const navbarReducer=(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RIGHT_DROPDOWN":
            return {
                ...state,
                ...action.payload
            };
        case "LEFT_DROPDOWN":
            return {
                ...state,
                ...action.payload
            };
        case "RESET_DROPDOWN":
            return {
                ...INITIAL_STATE
            }
        default:
            return state;
    }
};
export default navbarReducer;