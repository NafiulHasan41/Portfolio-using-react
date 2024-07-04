import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
          path:"/skills",
          element:<Skills/>
        }
        ,
        {
          path:"/projects",
          element:<Projects/>
        }
        ,
        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    },
  ]);