import React from "react";
import Header from "./Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import Products from "../pages/Products";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/singleproduct",
        element: <SingleProduct />,
      },
      {
        path: "/blog",
        element: <Blog/>

      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
