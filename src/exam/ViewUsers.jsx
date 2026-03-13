import React, { useEffect, useState } from "react";

function ViewUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("customerRegistrations")) || [];
    setUsers(data);
  }, []);

  const clearData = () => {
    localStorage.removeItem("customerRegistrations");
    setUsers([]);
  };

  return (
    <div>

      <h2>Registered Users</h2>

      <h3>Total Users: {users.length}</h3>

      <button onClick={clearData}>Clear All Users</button>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <hr />
            <p><b>ID:</b> {user.id}</p>
            <p><b>Name:</b> {user.fullName}</p>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Course:</b> {user.course}</p>
            <p><b>Registered At:</b> {user.registeredAt}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default ViewUsers;