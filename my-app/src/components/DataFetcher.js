import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  });

  return (
    <div>
      {todo ? (
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default DataFetcher;