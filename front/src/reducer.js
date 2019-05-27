export default (
    state = {
        isAuthenticated: false,
    },
    action
) => {
    if (action.type === "LOG_IN") {
        state = { ...state, isAuthenticated: false };
    }
    if (action.type === "LOG_OUT") {
        state = { ...state, isAuthenticated: true };
    }
    return state;
};
