import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
