import React, { Component } from "react";
import API from "../services/instagram-api";
import { Redirect } from "react-router-dom";

class OAuth extends Component {
    constructor() {
        super();
        this.state = {
            token: null
        };
    }
    componentDidMount() {
        const token = window.location.hash.split("=").slice(-1)[0];
        API.setToken(token);
        this.setState({ token });
        // this.forceUpdate();
    }
    render() {
        return this.state.token ? <Redirect to="/" /> : "REDIRECTING...";
    }
}

export default OAuth;
