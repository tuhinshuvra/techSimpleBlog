import { useQuery } from "@tanstack/react-query";
import HomePageBlogDisplay from "./HomePageBlogDisplay";

const HomePageBlogs = () => {

    const { data: allBlog = [], refetch } = useQuery({
        queryKey: ['allBlog'],
        queryFn: async () => {
            const respone = await fetch('https://tech-simple-blog-backend.vercel.app/show_blogs');
            const data = respone.json();
            return data;
        }
    })

    console.log("All Blog : ", allBlog);

    const approvedBlog = allBlog.filter(blog => blog.status === 'approve')

    console.log("Approved Blog :", approvedBlog);



    return (
        <div>
            {approvedBlog && <>
                {approvedBlog.map((blog) => (
                    <HomePageBlogDisplay
                        key={blog._id}
                        blog={blog}
                    >
                    </HomePageBlogDisplay>
                ))}
            </>}
        </div>
    );
};

export default HomePageBlogs;
