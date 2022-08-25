import React, { Component } from 'react';
class Operation extends Component {
    state = {  }
    render() { 
        return ( <>
        <p>{this.props.first}{this.props.operator}{this.props.second} </p>
        <h1>{eval((this.props.first)+(this.props.operator)+(this.props.second))}</h1>
        </> );
    }
}
 
export default Operation;