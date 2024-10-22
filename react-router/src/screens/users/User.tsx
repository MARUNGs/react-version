import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

export default function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>
        User id {userId}, name: {users[Number(userId) - 1].name}
      </h1>
      <hr />

      {/* 이 컴포넌트를 호출하는 URL에 자식 URL이 존재한다면 Outlet을 사용할 것.*/}
      {/* 여기서의 URL에서 '/followers'와 'followers'는 전혀 다른 의미이다. */}
      {/* 1. /followers : localhost:3000/followers */}
      {/* 2. followers : localhost:3000/{현재 내가 있는 경로}/followers */}
      <Link to={`followers`}>See Followers</Link>

      {/* useOutletContext: 자식 컴포넌트에게 데이터를 전달해주는 기능 */}
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}
