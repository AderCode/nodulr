import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from '../components/example';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <Example></Example>;
    }
}