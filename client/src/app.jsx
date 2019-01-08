import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HelloWorld from './components/hello';
import GoodbyeWorld from './components/goodbye';
import Home from './screens/home';

import PrivateRoute from './components/auth/privateRoute';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import AuthButton from './components/auth/authButton';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    {/* <Link to="/goodbye">Goodbye</Link>
                    <AuthButton /> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        {/* <PrivateRoute path="/goodbye" component={GoodbyeWorld} /> */}
                        <Route path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;