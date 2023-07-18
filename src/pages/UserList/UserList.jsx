// import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../components/shared/Loader/Loader";

const UserList = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    const [allUser, setAllUser] = useState(['']);
    const navigate = useNavigate();

    // const closeModal = () => {
    //     setDeletingUser(null);
    // };

    console.log("All Users : ", allUser);




    useEffect(() => {
        fetch(`http://localhost:5000/show_users`, {})
            .then((response) => response.json())
            .then((data) => {
                setAllUser(data);
            });
    }, []);



    const handleMakeAdmin = (email) => {
        fetch(`http://localhost:5000/makeAdminUser/${email}`, {
            method: "PUT",
            headers: {},
        })
            .then((respnse) => respnse.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("User Make Admin Successfully");
                }
            });
    };

    //   const handleDelete = (user) => {
    //     fetch(`${process.env.REACT_APP_CABD_SERVER}/users/${user._id}`, {
    //       method: "DELETE",
    //     })
    //       .then((respnse) => respnse.json())
    //       .then((data) => {
    //         console.log(data);
    //         if (data.deletedCount > 0) {
    //           toast("User Deleted Successfully.");
    //         }
    //         refetch();
    //       });
    //     // console.log(user._id);
    //   };

    // if (isLoading) {
    //     return <Loader></Loader>;
    // }

    return (
        <div>
            <h2 className="text-center  fw-bold  my-4">All User</h2>

            <div className="overflow-x-auto">
                <table className="table table-hover  table-bordered text-center">
                    <thead>
                        <tr className=" text-center table-secondary">
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUser.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role === "admin" ? (
                                        <p className=" fw-bolder text-success">Admin</p>
                                    ) : (
                                        <button
                                            className=" btn btn-sm btn-info"
                                            onClick={() => handleMakeAdmin(user.email)}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                {/* <td>
                                    <Link to={`/dashboard/userUpdate/${user._id}`}>
                                        <button
                                            className=" fw-bold btn-sm btn btn-primary mx-1"
                                        >
                                            Update
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => setDeletingUser(user)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#confirmationModal"
                                        className=" btn btn-sm  btn-outline-danger"
                                    >
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default UserList;
