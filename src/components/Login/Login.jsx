import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location?.state : '/');

                 // get access token
                 
                const loggedInUser = { email }
                axios.post('http://localhost:3000/jwt', loggedInUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })

                swal.fire({
                    title: "Logged In!",
                    text: "You have been logged in successfully!",
                    icon: "success"
                })
            })
            .catch(error => {
                console.log(error);
                swal.fire({
                    title: "Error!",
                    text: "Invalid email or password!",
                    icon: "error"
                })
            });
    };

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col md:flex-row gap-20">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="Login" />
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-10">Login Now!</h1>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-orange-600 text-white">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        Haven&apos;t any account? <Link className='text-orange-600' to="/register">Register Here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
