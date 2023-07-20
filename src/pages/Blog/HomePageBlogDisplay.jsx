import { Link } from 'react-router-dom';
import './Blog.css';

const HomePageBlogDisplay = ({ blog }) => {

    // console.log("HomePageBlogDisplay : ", blog);
    const { _id, blogTitle, blogDescription, bloggerName, bloggerEmail, image, publishDate } = blog;
    return (
        <div>
            <div className="card my-lg-3 my-md-2 my-1" >
                <div className="d-flex justify-content-between p-lg-3 p-1">
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5><Link className=" text-decoration-none" to={`/blogDetails/${_id}`}>{blogTitle}</Link></h5>
                            <p className="card-text">{blogDescription.slice(0, 300)}...</p>

                        </div>
                    </div>
                    <div className="col-md-2 d-none d-md-block">
                        <img src={image} className="blogImageHome rounded-start" alt="..." />
                    </div>
                </div>
                <div className=' d-flex justify-content-end'>
                    <p className="card-text mx-1"><small className="text-body-secondary"> <b>Blogger :</b> {bloggerName}</small></p>
                    <p className="card-text mx-1"><small className="text-body-secondary"> <b> Published:</b> {new Date(publishDate).toLocaleDateString()}</small></p>
                </div>
            </div>
        </div>
    );
};

export default HomePageBlogDisplay;