import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(` https://tech-simple-blog-backend.vercel.app/adminUser/${email}`)
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
