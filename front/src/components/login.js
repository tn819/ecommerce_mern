import React from "react";
import { Redirect } from "react-router-dom";
import { authenticate } from "../action";

export default class Login extends React.Component {
    state = {
        redirectToReferrer: false,
    };
    login = () => {
        authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true,
            }));
        });
    };
    render() {
        const { from } = this.props.location.state || {
            from: { pathname: "/" },
        };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer === true) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}
