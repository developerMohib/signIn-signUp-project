import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";
import Blogs from "./Component/Blogs.jsx";
import LogIn from "./Component/LogIn.jsx";
import Register from "./Component/Register.jsx";
import Provider from "./Provider/Provider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/about",
        element: <About> </About>,
      },
      {
        path: "/contact",
        element: <Contact> </Contact>,
      },
      {
        path: "/blog",
        element: <Blogs> </Blogs>,
      },
      {
        path: "/login",
        element: <LogIn> </LogIn>,
      },
      {
        path: "/register",
        element: <Register> </Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
