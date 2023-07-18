import { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../components/AllContext/AuthProvider";
import { toast } from "react-hot-toast";
import { Form } from "react-bootstrap";

const Register = () => {
    useTitle("Register");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, setLoading } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");

    const navigate = useNavigate();

    const handleOnSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // console.log("Save User Info:", result)
                toast.success("User created successfully.");

                const userInfo = {
                    displayName: data?.name,
                };
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch((error) => {
                        // console.log(error)
                        setSignUpError(errors.message);
                    });
                // form.reset();
            })
            .catch((error) => {
                // console.log("Error : ", error)
                setSignUpError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };



    const saveUser = (name, email) => {
        const user = { name, email };
        console.log("User Data :", user);

        // fetch(`${process.env.REACT_APP_SERVER}/save_users`, {
        fetch(`http://localhost:5000/save_users`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Saved user data: ", data);
                navigate("/");
            });
    };


    const handleShowPassword = () => {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    return (
        <div>
            <section className="  gradient-form" style={{ backgroundColor: "#eee" }}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 mx-auto">
                            <div
                                className="card-body login_form p-5"
                                style={{ backgroundColor: "#EEF1F6" }}
                            >
                                <Form
                                    onSubmit={handleSubmit(handleOnSubmit)}
                                    className=" rounded rounded-2 bg-sm p-5 "
                                >
                                    <Form.Text className="text-danger text-center">
                                        {signUpError}
                                    </Form.Text>
                                    <div className="">
                                        <h3 className=" mb-4 text-center fw-bold">
                                            Register
                                        </h3>



                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="fullname">
                                                Full Name<span className="star">&#x2605;</span>
                                            </label>
                                            <input
                                                type="name"
                                                name="name"
                                                {...register("name", { required: true })}
                                                className="form-control"
                                                placeholder="Enter Name"
                                            />
                                            {errors.name && (
                                                <p className="text-red-600">Name is required</p>
                                            )}
                                        </div>


                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="email">
                                                Email <span className="star">&#x2605;</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                {...register("email", { required: true })}
                                                className="form-control"
                                                placeholder="Enter email address"
                                            />
                                            {errors.email && (
                                                <p className="text-red-600">Email is required</p>
                                            )}
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">
                                                Password <span className="star">&#x2605;</span>
                                            </label>

                                            <input
                                                name="password"
                                                id="password"
                                                type="password"
                                                {...register("password", {
                                                    required: true,
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password length must be minimum 6",
                                                    },
                                                    // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                                })}
                                                placeholder="Enter a password"
                                                className=" form-control"
                                            />
                                            {errors.password && (
                                                <p className="text-red-500">
                                                    {errors.password.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* show password */}
                                        <input
                                            // className=" form-check "
                                            type="checkbox"
                                            onClick={handleShowPassword}
                                        />
                                        <span className=" ms-2"> Show Password</span>


                                        <div className="text-center pt-1 mb-5 pb-1">
                                            <button className="btn btn-primary" type="submit">Register</button>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">
                                                Already have an account?
                                            </p>
                                            <Link to="/login">
                                                <button type="button" className=" btn btn-info">
                                                    Go Login
                                                </button>
                                            </Link>
                                        </div>

                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <FaFacebook />
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <FaGoogle />
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <FaTwitter />
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <FaGithub />
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
