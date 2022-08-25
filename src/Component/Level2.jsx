import React, { Component } from 'react';
import LastChild from './LastChild';
class Level2 extends Component {
    state = {  } 
    render(props) { 
        return (
            <>
            <p>level-2</p>
            {/* <p>{props.username}</p> */}
            <LastChild username={this.props.username}/>
            </>
        );
    }
}
 
export default Level2;