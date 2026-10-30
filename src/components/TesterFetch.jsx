import { useState } from "react";
function TesterFetch() {
  const [users, setUsers] = useState([]);
  function getUsers() {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const usersj = await response.json()
      return usersj
    };
    getData().then((usersj)=>setUsers(usersj))
  }
  return (
    <div>
      <button onClick={getUsers}>zzzzzz</button>
     {users.map((u) => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}
export default TesterFetch
