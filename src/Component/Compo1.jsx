import React, { Component } from 'react';
class Compo1 extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <p>Hello {this.props.name}</p>
            </>
        );
    }
}
 
export default Compo1;