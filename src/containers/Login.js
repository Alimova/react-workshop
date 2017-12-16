import React, { Component, Fragment } from "react";
import INSTA from "../services/instagram-api";

class Login extends Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
    }

    login() {
        INSTA.login();
    }

    render() {
        return (
            <Fragment>
                <p>You are not logged in</p>
                <button onClick={this.login}>Login me!</button>
            </Fragment>
        );
    }
}

export default Login;
