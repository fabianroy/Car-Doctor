import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-one-pi.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use(res => {
            return res;
        }, error => {
            console.log('Error track in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('Logout the user');

                logOut()
                    .then(() => {
                        navigate('/login');
                    })
            }
        }
        )
    }, [logOut, navigate])

    return axiosSecure;

};

export default useAxiosSecure;