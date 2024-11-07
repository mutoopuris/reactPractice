import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://api.github.com/users');
                if(response.ok) {
                    const jsonData = await response.json();
                    setUsers(jsonData)
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch(error) {
                console.log('Error fetching data: ', error);
            }
        };
        fetchData();
    }, [])
    return(
        <div>
          
                <div>
                    <h2>GitHub Users:</h2>
                    <ul> 
                        {users.map(user => (
                            <li key={user.id}>{user.login}</li>
                        ))}
                    </ul>
                    </div>
           
        </div>
    );
};

export default MyComponent;