const INITIAL_STATE = { navbarColours: "primary", modalIsActive: false, modalHasBeenShown: false, subscribed:false };

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MODAL_STATUS':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export default appReducer;