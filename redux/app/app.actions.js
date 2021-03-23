// export function navbarColoursAction(navbarColours="primary") {
//     return {
//         type: 'NAVBAR_COLOURS',
//         payload: {navbarColours}
//     };
// }
export function navbarContentAction(navbarColours) {
    return {
        type: 'NAVBAR_CONTENT',
        payload: {navbarColours}
    };
}
export function modalStatusAction(modal) {
    return {
        type: 'MODAL_STATUS',
        payload: {...modal}
    };
}