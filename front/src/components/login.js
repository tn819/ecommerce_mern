import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { login } from "../action";

function Login (props) {

    const handleLogin = () => {
        props.dispatch(login())
    };

    const { from } = props.location.state || {
        from: { pathname: "/" },
    };

    if (props.userid) {
        return <Redirect to={from} />;
    }

    return (
        <div>
            <p>You must log in to view the page</p>
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
    
}

function mapStateToProps(state) {
    return {
      userid: state.userid,
    };
  };

export default connect(mapStateToProps)(Login);
