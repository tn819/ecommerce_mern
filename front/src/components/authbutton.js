import { signout } from "../action";
import { withRouter } from "react-router-dom";

import React from "react";

export const AuthButton = withRouter(props =>
    props.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    signout(() => props.history.push("/"));
                }}>
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
);
