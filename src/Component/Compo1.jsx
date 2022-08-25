import React, { Component } from 'react';
class Compo1 extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <h1>Hello {this.props.name}</h1>
            </>
        );
    }
}
 
export default Compo1;