import React, { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  // first render
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')

  .then(response => response.json())

  .then(json => {
    console.log(json);
setUsers(json)})

}, []);

  // users re-render
  useEffect(() => {
    
  }, [users]);

  // all re-renders (not really usable)
  useEffect(() => {});

  return (
    <div>
      <h2>Users</h2>
      {users.map((user, i) => (
        <div key={`${user.name}-${i}`} className="userCard">
          <h4>Name: {user.name}</h4>
          <h3>Email: {user.email}</h3>
        </div>
      ))}
    </div>
  );
};
