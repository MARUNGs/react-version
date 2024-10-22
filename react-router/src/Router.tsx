import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        // dynamic parameter
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
      // 만약, /users에서도 뭔가를 보여줄 것이 있다면 이렇게 해야한다.
      /*
      {
        path: 'users',
        element: <User/>,
        children: [{
          path: ':userId',
          element: <User/>
        }]
      }
      */
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
