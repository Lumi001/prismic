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

export function navbarContentAction(primary) {
    return {
        type: 'NAVBAR_CONTENT',
        payload: {primary}
    };
}
// export function resetDropdownAction() {
//     return {
//         type: 'RESET_DROPDOWN'
//     };
// }