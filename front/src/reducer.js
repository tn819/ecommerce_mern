export default (
    state = {
        username: null,
        isLoggedIn: false
    },
    action
) => {
    if (action.type === "LOG_IN" || action.type === "REGISTER") {
        state = { ...state, username: action.username , isLoggedIn: action.isLoggedIn };
    }

    if (action.type === "LOG_OUT") {
        state = { ...state, username: action.username, isLoggedIn: false };
    }

    if (action.type === "LOGGED_IN") {
        state = { ...state, isLoggedIn: action.isLoggedIn, username: action.username };
    }

    return state;
};
