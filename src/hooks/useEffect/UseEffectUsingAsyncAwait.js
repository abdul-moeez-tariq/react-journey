// import React, { useEffect, useState } from "react";

// function UseEffectUsingAsyncAwait() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchUsers() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//       );

//       const data = await response.json();
//       setUsers(data);
//     }

//     fetchUsers();
//   }, []);

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default UseEffectUsingAsyncAwait;

// --- Handling Errors using Async/Await ---
import { useEffect, useState } from "react";

function UseEffectUsingAsyncAwait() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name} - {user.address.zipcode}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectUsingAsyncAwait;
