export default (
    state = {
        userid: null,
    },
    action
) => {
    if (action.type === "LOG_IN" || action.type === "LOG_OUT") {
        state = { ...state, userid: action.userid };
    }

    return state;
};
