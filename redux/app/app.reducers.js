const INITIAL_STATE = { navbarColours: "primary" };

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAVBAR_COLOURS':
            return {
                ...state,
                ...action.payload
            };
        case 'NAVBAR_CONTENT':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export default appReducer;