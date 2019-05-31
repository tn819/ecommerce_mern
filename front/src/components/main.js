import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { isLoggedIn } from '../action';

import Login from "./login";
import PrivateRoute from "./privateroute";
import Header from './header';
import Search from './search';
import Profile from './profile';
import AddItem from "./addItem";

//client-side protected routes:
//https://tylermcginnis.com/react-router-protected-routes-authentication/

class Main extends React.Component {

    componentDidMount(){
        this.props.dispatch(isLoggedIn());
    }


    render() {
        return (
            <Router>
                <Header />
                <div>

                    {/*
                        Public route will feature public-facing page, blank for now
                     */}
                    <Route path="/login" component={Login} />
                    <Route path="/search" component={Search} />
                    {/*
                        see protected component, it uses redux to get authentication status
                        redirects if there's an issue
                        
                     */}
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/addnew" component={AddItem} />
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
