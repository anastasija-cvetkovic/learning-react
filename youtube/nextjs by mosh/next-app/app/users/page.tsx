//routing system in next js is based on convention, not configuration
//always fetch data in server components
import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  //cache:'no-store' - disable caching, good in situation where data changes frequently -> we always want to show fresh data to our users
  //other option is to make data fresh for a certain period of time
  //caching option is only implemented in fetch - trying this on a third party library like axios won't work!
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
