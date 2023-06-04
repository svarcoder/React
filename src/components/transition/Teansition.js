/**
 * This is a React component that uses useTransition to filter and display a list of users based on a
 * search term input.
 * @returns The `TransitionExe` component is being returned.
 */
import React, { useState, useTransition } from "react";
import users from "./MOCK_DATA.json";

const TransitionExe = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);
    startTransition(() => {
      setFiltered(users.filter((item) => item.first_name.includes(value)));
    });
  };

  return (
    <div className="container">
      <div>
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <p>
            {users.length !== filtered.length
              ? `${filtered.length} matches`
              : null}
          </p>
        )}
      </div>

      <input
        onChange={handleChange}
        value={searchTerm}
        type="text"
        placeholder="Type a name"
      />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="cards">
          {filtered.map((user) => (
            <div className="card" key={user.id}>
              <div className="profile">
                <strong>{`${user.first_name} ${user.last_name}`}</strong>
              </div>
              <div className="body">
                <strong>{user.email}</strong>
              </div>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransitionExe;
