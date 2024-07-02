import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { createUser } = useAuth();

    // register user and fetch if he is not already registered. If registered, show error message and dont fetch the data and redirect show user is already registered

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            displayName: name,
            email,
            password
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                swal.fire({
                    title: "Registered!",
                    text: "You have been registered successfully!",
                    icon: "success"
                })
            })
            .then(() => {
                fetch(`http://localhost:3000/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( user )
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch((error) => {
                console.log(error.errorMessage);
                swal.fire({
                    title: "Error!",
                    text: "User already exists!",
                    icon: "error"
                })
            });
    }






        return (
            <div className="hero my-20">
                <div className="hero-content flex-col md:flex-row gap-20">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={img} alt="Login" />
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center mt-10">Sign Up Now!</h1>

                        <form onSubmit={handleRegister} className="card-body">


                            <div className="form-control">
                                <label htmlFor="email" className="label">
                                    Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label htmlFor="email" className="label">
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
                                <label htmlFor="password" className="label">
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
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            Already have an account? <Link className='text-orange-600' to="/login">Login Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Register;
