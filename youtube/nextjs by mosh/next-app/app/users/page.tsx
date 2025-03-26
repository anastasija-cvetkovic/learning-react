//routing system in next js is based on convention, not configuration
//always fetch data in server components
import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  //cache:'no-store' - disable caching, good in situation where data changes frequently -> we always want to show fresh data to our users
  //other option is to make data fresh for a certain period of time - next: { revalidate: 10 },
  //caching option is only implemented in fetch - trying this on a third party library like axios won't work!
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {/* this time won't change in production because the page is seen as a static page */}
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
