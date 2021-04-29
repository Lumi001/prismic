const INITIAL_STATE = { leftDropdown: false, rightDropdown: false, primary:true };

const navbarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAVBAR_CONTENT':
            return {
                ...state,
                ...action.payload
            };
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