import { useState } from "react";
import axios from "axios";

function TesterAxios() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <button onClick={getUsers}>zzzzzz</button>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
export default TesterAxios;