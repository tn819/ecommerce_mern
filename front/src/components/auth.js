import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { connect } from "react-redux";
import "./css/App.css";

import AuthButton from "./components/authbutton";

//client-side protected routes:
//https://tylermcginnis.com/react-router-protected-routes-authentication/

const fakeAuth = {
    //push to redux
    //hit mongo routes -- need node info
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
    state = {
        redirectToReferrer: false,
    };
    login = () => {
        fakeAuth.authenticate(() => {
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

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            props.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

class AuthExample extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <AuthButton isAuthenticated={props.isAuthenticated} />
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
