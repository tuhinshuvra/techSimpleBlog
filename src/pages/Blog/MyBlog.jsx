// import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../components/AllContext/AuthProvider";

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
                            <th>Publish Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBlogs && <>
                            {myBlogs.map((blog, index) => (
                                <tr key={blog._id}>
                                    <td>{index + 1}</td>
                                    <td>{blog.blogTitle}</td>
                                    <td>{blog.blogDescription ? blog.blogDescription.slice(0, 150) : ""}</td>
                                    {/* {organization.slice(0, 25)} */}
                                    <td>{new Date(blog.publishDate).toLocaleDateString()}</td>
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
