import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();

  // URLSearchParams에 대해서
  setTimeout(() => {
    // search parameters를 세팅해줄 수 있다.
    setSearchParams({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);

  // console.log(readSearchParams.has("day"));
  // console.log(readSearchParams.get("day"));

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
