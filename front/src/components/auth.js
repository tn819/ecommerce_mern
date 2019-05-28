import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import AuthButton from "./authbutton";
import Login from "./login";
import PrivateRoute from "./privateroute";

//client-side protected routes:
//https://tylermcginnis.com/react-router-protected-routes-authentication/

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class AuthExample extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <AuthButton isAuthenticated={this.props.isAuthenticated} />
                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>
                    <Route path="/public" component={Public} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/protected" component={Protected} />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
    };
};

export default connect(mapStateToProps)(AuthExample);
