import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <div className="radial-progress" style={{"--value":70}}>70%</div>
    }

    if(user){
        return children;
    }


    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;