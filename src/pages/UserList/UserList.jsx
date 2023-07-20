import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const UserList = () => {
    useTitle("UserList");

    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const respone = await fetch('https://tech-simple-blog-backend.vercel.app/show_users');
            const data = respone.json();
            return data;
        }
    })

    console.log("All Users : ", allUser);

    const handleMakeAdmin = (email) => {
        fetch(`https://tech-simple-blog-backend.vercel.app/makeAdminUser/${email}`, {
            method: "PUT",
            headers: {},
        })
            .then((respnse) => respnse.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("User Make Admin Successfully");
                    refetch();
                }
            });
    };


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

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default UserList;
