import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../components/AllContext/AuthProvider";

const NewBlogEntry = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const publishDate = new Date();

    const imageHostKey = `755410aab80a39b03b11cf0eaecb66fb`;

    console.log("imageHostKey : ", imageHostKey);

    const handleNewBlogEntry = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const blogInfo = {
                        bloggerEmail: user?.email,
                        bloggerName: user?.displayName,
                        blogTitle: data.blogTitle,
                        blogDescription: data.blogDescription,
                        image: imgData.data.url,
                        blogConclusion: data.blogConclusion,
                        publishDate: publishDate,


                    };
                    console.log("Blog Info Data :", blogInfo);

                    axios({
                        url: `http://localhost:5000/save_blogs`,
                        method: "POST",
                        headers: { 'Content-type': 'application/json; charset=UTF-8' },
                        data: blogInfo,
                    })
                        .then((response) => {
                            // console.log("blog data: ", response);
                            if (response.data) {
                                toast("The Blog Saved Successfully");
                                navigate("/myBlog");
                            }
                            // const destination = location?.state?.from || "/";
                            // navigate(location?.state?.from || "/", { replace: true });
                        })
                }
            })
    }



    return (
        <div>
            <h2 className=" text-center fw-bold my-4">Blog Entry</h2>

            <form onSubmit={handleSubmit(handleNewBlogEntry)}>

                <div className=" col-md-6">
                    <label htmlFor="blogTitle">
                        <b>Blog Title</b>
                    </label>
                    <input
                        {...register("blogTitle", { required: true })}
                        name="blogTitle"
                        className="input form-control my-lg-3"
                        id="blogTitle"
                        type="text"
                        placeholder="blog Title"
                    />
                </div>

                <div>
                    <textarea
                        {...register("blogDescription", { required: true })}
                        name="blogDescription"
                        className="input form-control my-lg-3"
                        id="blogDescription"
                        type="text"
                        placeholder="Blog Description"
                    // maxLength={10000}
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Photo</span> </label>
                    <input type="file"
                        name='image'
                        {...register("image", { required: true })}
                        placeholder="Image"
                        className="input input-bordered w-full"
                    />
                    {errors.photo && <p className='text-red-600'>Upload Product Photo</p>}
                </div>

                <div>
                    <textarea
                        {...register("blogConclusion", { required: true })}
                        name="blogConclusion"
                        className="input form-control my-lg-3"
                        id="blogConclusion"
                        type="text"
                        placeholder="Blog Conclusion"
                    // maxLength={1000}
                    />
                </div>

                <div className=" d-flex justify-content-between my-lg-5">
                    <button type="reset" className="btn btn-warning fw-bold">Reset</button>
                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default NewBlogEntry;
