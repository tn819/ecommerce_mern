export default (
    state = {
        username: null,
    },
    action
) => {
    if (action.type === "LOG_IN" || action.type === "LOG_OUT" || action.type === "REGISTER") {
        state = { ...state, username: action.username };
    }

    return state;
};
