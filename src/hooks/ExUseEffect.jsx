import React, { useEffect, useState } from "react";

const ExUseEffect = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>ExUseEffect</h2>
      {users.map((user, i) => (
        <div key={i}>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExUseEffect;
