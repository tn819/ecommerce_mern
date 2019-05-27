import { signout } from "../action";
import { withRouter } from "react-router-dom";
import React from "react";

export const AuthButton = withRouter(props =>
    props.isAuthenticated ? (
        <div>
            Welcome!{" "}
            <button
                onClick={() => {
                    signout(() => props.history.push("/"));
                }}>
                Sign out
            </button>
        </div>
    ) : (
        <div>You are not logged in.</div>
    )
);
