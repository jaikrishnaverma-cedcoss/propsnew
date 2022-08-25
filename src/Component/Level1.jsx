import React, { Component } from 'react';
import Level2 from './Level2';
class Level1 extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <p>level-1</p>
            <Level2 username={this.props.username}/>
            </>
        );
    }
}
 
export default Level1;