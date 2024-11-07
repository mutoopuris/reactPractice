import React, { useState } from 'react'

const User2 = () => {
const initialObj = {
    firstName: 'Sai Kumar',
    lastName: 'Mutoopuri'
}

const [data, setData] = useState(initialObj);

const changeFirstName = () =>{
    setData({
        ...data,
        firstName:'Ajitha'
    });
}

const changeLastName = () => {
    setData({
        ...data,
        lastName: 'Gampa'
    })
}
  return (
    <div>
      Hello this User2
      <h1>My first name is : {data.firstName}</h1>
      <button onClick={changeFirstName}>change firstName</button>
      <h1>My last Name is: {data.lastName}</h1>
      <button onClick={changeLastName}>change lastName</button>
    </div>
  )
}

export default User2
