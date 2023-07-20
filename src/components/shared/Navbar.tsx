import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AllContext/AuthProvider';
import { toast } from 'react-hot-toast';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut, loading, setLoading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    console.log("Login User Data: ", user);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("User logout successfully!", { duration: 1000 });
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
                                <Link className="nav-link" to="/about">AboutUs</Link>
                            </li>
                            {user?.email &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">{user?.email}</Link>
                                </li>
                            }
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user?.email ? <>Gate</> : <>Login</>}
                                </Link>
                                <ul className="dropdown-menu">
                                    {user?.email ?
                                        <>
                                            <li><Link className="dropdown-item fw-bold" to="/newBlogEntry">Blog Entry</Link></li>
                                            <li><Link className="dropdown-item fw-bold" to="/myBlog">My Blogs</Link></li>

                                            {isAdmin && <>
                                                <li><Link className=" dropdown-item fw-bold " to="/userList">UserList</Link></li>
                                                <li> <Link className=" dropdown-item fw-bold" to="/blogList">All Blog</Link></li>
                                            </>}
                                            <li><Link className="dropdown-item fw-bold" onClick={handleLogOut}>LogOut</Link></li>

                                        </>
                                        :
                                        <>
                                            <li><Link className="dropdown-item fw-bold" to="/register">Register</Link></li>
                                            <li><Link className="dropdown-item fw-bold" to="/login">Login</Link></li>
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