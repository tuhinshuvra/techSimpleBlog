import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BlogList from "../pages/Blog/BlogList";
import UserList from "../pages/UserList/UserList";
import NewBlogEntry from "../pages/Blog/NewBlogEntry";
import BlogDetails from "../pages/Blog/BlogDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/newBlogEntry",
                element: <NewBlogEntry></NewBlogEntry>
            },
            {
                path: "/blogList",
                element: <BlogList></BlogList>
            },
            {
                path: "/blogDetails/:blogId",
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogDetails/${params.blogId}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/userList",
                element: <UserList></UserList>
            },
        ]

    }
]);

export default router;