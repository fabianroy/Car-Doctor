import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);


    if (loading) {
        return <div className="w-fit mx-auto my-20"><progress className="progress w-56"></progress></div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
};