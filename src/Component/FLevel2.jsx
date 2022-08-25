import React from 'react';
import FLastChild from './FLastChild';
function FLevel2(props) {
    return ( 
        <>
              <p>level-2</p>
       <FLastChild username={props.username}/>
       </>
     );
}

export default FLevel2;