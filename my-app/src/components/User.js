import React from 'react';

function User(props) {
    return (
        <>
        <h1> my name is {props.name}</h1>
        <p>my expertise {props.expertise}</p>
        </>
    )
}

export default User;