import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// createBrowserRouter를 사용하게되면 더이상 최상위 컴포넌트를 렌더하지 않는다.
// 대신, RouterProvider 객체를 이용할 것이다.
// RouterProvider는 router props를 가짐.
//   - 이 router는 createBrowserRouter를 export한 변수이다.
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
