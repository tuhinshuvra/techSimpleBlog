// import React, { ReactNode } from "react";
// import { Navigate, useLocation } from "react-router-dom";

// interface Iprops {
//     children: ReactNode;
// }

// export default function PrivateRoute({ children }: Iprops) {

//     const { pathname } = useLocation();

//     if (isLoading) {
//         return <p>Loading...</p>;
//     }
//     if (!user.email && !isLoading) {
//         return <Navigate to="/login" state={{ path: pathname }} />;
//     }

//     return children;
// }