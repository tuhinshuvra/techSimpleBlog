// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../components/AllContext/AuthProvider";
import './Blog.css';
import { Link } from "react-router-dom";

const MyBlogs = () => {
    const { user } = useContext(AuthContext);

    const email = user?.email;
    const { data: myBlogs = [], refetch } = useQuery({
        queryKey: ['myBlogs'],
        queryFn: async () => {
            const respone = await fetch(`http://localhost:5000/myPostedBlog?email=${email}`);
            const data = respone.json();
            return data;
        }
    })

    console.log("All Blog : ", myBlogs);

    return (
        <div>
            <h2 className="text-center  fw-bold  my-4">My Blogs</h2>

            <div className="overflow-x-auto">
                <table className="table table-hover  table-bordered text-center">
                    <thead>
                        <tr className=" text-center table-secondary">
                            <th>SL</th>
                            <th>Blog Title</th>
                            <th>Blog Description</th>
                            <th>Blog Image</th>
                            <th>Publish Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBlogs && <>
                            {myBlogs.map((blog, index) => (
                                <tr key={blog._id}>
                                    <td>{index + 1}</td>
                                    <td><Link className=" text-decoration-none" to={`/blogDetails/${blog?._id}`}>{blog?.blogTitle}</Link></td>
                                    <td>{blog?.blogDescription ? blog.blogDescription.slice(0, 150) : ""}</td>
                                    <td><img className=" blogImg" src={blog?.image} alt="blog_image" /> </td>
                                    {/* {organization.slice(0, 25)} */}
                                    <td>{new Date(blog?.publishDate).toLocaleDateString()}</td>
                                    <td>
                                        {blog?.status === "approve" ? (<p className=" fw-bolder text-success">Approved</p>) : (<p>Pending</p>)}
                                    </td>
                                </tr>
                            ))}

                        </>}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyBlogs;
