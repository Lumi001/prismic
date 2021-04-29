export function leftDropdownAction(leftDropdown=false) {
    return {
        type: 'LEFT_DROPDOWN',
        payload: {leftDropdown}
    };
}
export function rightDropdownAction(rightDropdown=false) {
    return {
        type: 'RIGHT_DROPDOWN',
        payload: {rightDropdown}
    };
}

export function navbarContentAction(navbarColours) {
    return {
        type: 'NAVBAR_CONTENT',
        payload: {navbarColours}
    };
}
// export function resetDropdownAction() {
//     return {
//         type: 'RESET_DROPDOWN'
//     };
// }