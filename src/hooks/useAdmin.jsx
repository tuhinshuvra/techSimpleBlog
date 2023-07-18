import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_CABD_SERVER}/adminUser/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                });
        }
    }, [email, isAdmin]);
    return [isAdmin, isAdminLoading];
};
export default useAdmin;
