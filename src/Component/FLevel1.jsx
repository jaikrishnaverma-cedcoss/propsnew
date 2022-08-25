import React from 'react';
import FLevel2 from './FLevel2';
function FLevel1(props) {
    return ( 
        <>
        <p>level-1</p>
        <FLevel2 username={props.username}/>
        </>
     );
}

export default FLevel1;