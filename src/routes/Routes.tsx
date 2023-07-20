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
import MyBlogs from "../pages/Blog/MyBlog";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";



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
                element: <PrivateRoute><NewBlogEntry></NewBlogEntry></PrivateRoute>
            },
            {
                path: "/blogList",
                element: <AdminRoute> <BlogList></BlogList></AdminRoute>
            },
            {
                path: "/myBlog",
                element: <PrivateRoute> <MyBlogs></MyBlogs></PrivateRoute>
            },
            {
                path: "/blogDetails/:blogId",
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://tech-simple-blog-backend.vercel.app/blogDetails/${params.blogId}`)
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
                element: <AdminRoute> <UserList></UserList></AdminRoute>
            },
        ]

    }
]);

export default router;