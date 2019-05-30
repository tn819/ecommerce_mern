import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { isLoggedIn } from '../action';

import AuthButton from "./authbutton";
import Login from "./login";
import PrivateRoute from "./privateroute";
import Header from './header'
import Search from './search'

//client-side protected routes:
//https://tylermcginnis.com/react-router-protected-routes-authentication/

const Public = () => <h3>Public Facing Page</h3>;
const Protected = () => <h3>Protected</h3>;

class Main extends React.Component {

    componentDidMount(){
        this.props.dispatch(isLoggedIn());
    }

    render() {
        return (
            <Router>
                <Header />
                <div>
                    <AuthButton />
                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/search">Search Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>
                    {/*
                        Public route will feature public-facing page, blank for now
                     */}
                    <Route path="/public" component={Public} />
                    <Route path="/login" component={Login} />
                    <Route path="/search" component={Search} />
                    {/*
                        see protected component, it uses redux to get authentication status
                        redirects if there's an issue
                        
                     */}
                    <PrivateRoute path="/protected" component={Protected} />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        username: state.username
    };
};

export default connect(mapStateToProps)(Main);
