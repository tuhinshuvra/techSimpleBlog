// import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const HomePageBlogs = () => {

    const { data: allBlog = [], refetch } = useQuery({
        queryKey: ['allBlog'],
        queryFn: async () => {
            const respone = await fetch('http://localhost:5000/show_blogs');
            const data = respone.json();
            return data;
        }
    })

    console.log("All Blog : ", allBlog);

    const approvedBlog = allBlog.filter(blog => blog.status === 'approve')

    console.log("Approved Blog :", approvedBlog);



    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table table-hover  table-bordered ">
                    <thead>
                        <tr className=" text-center table-secondary">
                            <th>SL</th>
                            <th>Blog Title</th>
                            <th>Blog Description</th>
                            <th>Publish Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {approvedBlog && <>
                            {approvedBlog.map((blog, index) => (
                                <tr key={blog._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Link className=" text-decoration-none" to={`/blogDetails/${blog._id}`}>{blog.blogTitle}</Link>
                                    </td>
                                    <td>{blog.blogDescription ? blog.blogDescription.slice(0, 150) : ""}</td>
                                    {/* {organization.slice(0, 25)} */}
                                    <td>{new Date(blog.publishDate).toLocaleDateString()}</td>


                                </tr>
                            ))}

                        </>}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default HomePageBlogs;
