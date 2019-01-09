import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Example extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div className="container">
          <div className="page-header">
            <h1>Glowing Node Example</h1>
          </div>
          <p>
            <button type="button" className="node node-lg glow">Node</button>
          </p>
        </div>;
    }
}
