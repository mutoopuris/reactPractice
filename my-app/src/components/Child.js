import React from 'react';
import Grandchild from './Grandchild';

function Child() {
    return(
        <>
            <h1>I'm the Child Component</h1>
            <Grandchild />
        </>
    )
}

export default Child;