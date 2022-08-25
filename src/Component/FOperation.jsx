import React from 'react';
function FOperation(props) {
    return ( 
        <>
           <p>{props.first}{props.operator}{props.second} </p>
        <h1>{eval((props.first)+(props.operator)+(props.second))}</h1>
        </>
     );
}

export default FOperation;