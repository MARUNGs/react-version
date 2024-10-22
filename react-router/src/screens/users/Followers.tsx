import { useOutletContext, useParams } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

export default function Followers() {
  // Q. 자식 컴포넌트에서도 데이터를 호출하여 사용하고 싶다면?
  // 1. useParams 훅을 이용하는 방법
  // 2. route들과 소통하는 방법 useOutletContext (이건 User.tsx에서 확인)
  const { userId } = useParams();
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return (
    <>
      <h1>Followers</h1>
      <span>{nameOfMyUser}</span>
    </>
  );
}
