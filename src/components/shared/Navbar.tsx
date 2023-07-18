import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AllContext/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut, loading, setLoading } = useContext(AuthContext);
    console.log("Login User Email: ", user?.email);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("User logout successfully!", { position: 'top-right', });
                navigate("/");
            })
            .catch((error) => {
                console.log("Error : ", error);
            });
    };

    return (
        <div>
            <nav className="navbar bg-secondary navbar-expand-lg  fw-bold">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">TechSimpleBlog</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allBlog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">AboutUs</Link>
                            </li>
                            {user?.email &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">{user?.email}</Link>
                                </li>
                            }
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Authentication
                                </Link>
                                <ul className="dropdown-menu">
                                    {user?.email ?
                                        <>
                                            <li><Link className="dropdown-item" onClick={handleLogOut}>LogOut</Link></li>
                                        </>
                                        :
                                        <>
                                            <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                            <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                        </>
                                    }
                                    <li></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div >
            </nav >
        </div >
    );
};

export default Navbar;