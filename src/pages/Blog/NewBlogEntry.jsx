import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../components/AllContext/AuthProvider";

const NewBlogEntry = () => {
    const { user } = useContext(AuthContext);
    const [compressedFile, setCompressedFile] = useState(null);

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();



    // const handleCompressedUpload = (e) => {
    //   const image = e.target.files[0];
    //   new Compressor(image, {
    //     quality: 0.8,  
    //     success: (compressedResult) => {
    //       setCompressedFile(res)
    //     },
    //   });
    // };




    const [image, setImage] = useState(null);

    const handleFileInputChange = async (e) => {
        const field = e.target.name;
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        const newData = { ...image };
        newData[field] = base64;

        setImage(newData);
    };
    // console.log("xx", image)

    const publishDate = new Date();

    const handleNewBlogEntry = (data) => {
        const blogInfo = {
            bloggerEmail: user?.email,
            bloggerName: user?.displayName,
            blogTitle: data.blogTitle,
            blogDescription: data.blogDescription,
            blogConclusion: data.blogConclusion,
            publishDate: publishDate,

            //image: imgData.data.url,
            // image: image,

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
                    navigate("/blogList");
                }
                // const destination = location?.state?.from || "/";
                // navigate(location?.state?.from || "/", { replace: true });
            })
    };


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
