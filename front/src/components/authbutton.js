import { signout } from "../action";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import React from "react";

const AuthButton = withRouter(props => {

    const handleLogout = () => {
        props.dispatch(signout())
        props.history.push("/")
    }

    return props.username ? (
        <div>
            Welcome!{" "}
            <button
                onClick={handleLogout}>
                Sign out
            </button>
        </div>
    ) : (
        <div>You are not logged in.</div>
    )
})

function mapStateToProps(state) {
    return {
      username: state.username,
    };
  };

export default connect(mapStateToProps)(AuthButton);
