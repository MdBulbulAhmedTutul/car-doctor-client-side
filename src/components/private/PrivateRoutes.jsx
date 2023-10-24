import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;