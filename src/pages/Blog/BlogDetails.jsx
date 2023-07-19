import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {

    const blogsData = useLoaderData();

    console.log("blogsData : ", blogsData);

    return (
        <div className=' mx-3 my-4'>
            <h2 className=' my-4'>{blogsData.blogTitle} </h2>
            <p>{blogsData.blogDescription} </p>
            <p>{blogsData.blogConclusion} </p>
            <div className=' d-flex justify-content-end'>
                <td className=' fst-italic'> <b>Published: </b> {new Date(blogsData.publishDate).toLocaleDateString()}</td>
            </div>

        </div>
    );
};

export default BlogDetails;