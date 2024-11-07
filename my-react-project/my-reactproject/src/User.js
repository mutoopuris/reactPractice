import React, { useState } from 'react';

const User = (prop) => {
    //console.log(prop);
    
    const [count,setCount] = useState(0);
    console.log(useState());
    const incrementCount = () => {
        //setCount(count + 1);
        setCount((prevCount) => {
            return prevCount + 1;
        })
    }

    const decrementCount = () => {
        setCount(count - 1 );
    }

    return (
        <>
        <h1>ID: {prop.id}</h1>
        <h1>Name: {prop.name}</h1>

        <button onClick={decrementCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}

export default User;