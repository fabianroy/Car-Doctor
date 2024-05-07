import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {

    const { user } = useContext(AuthContext);
    const { logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }

    const navList = <>
        <NavLink className="font-semibold" to="/"><li><a>Home</a></li></NavLink>
        {
            user ? <> <NavLink className="font-semibold" to="/bookinglist"><li><a>Booking List</a></li></NavLink> <NavLink onClick={handleLogout} className="font-semibold"><li><a>Logout</a></li></NavLink> </> : <NavLink className="font-semibold" to="/login"><li><a>Login</a></li></NavLink>
        }
        <NavLink className="font-semibold" to="contact"><li><a>Contact</a></li></NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 md:my-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <h1><img className="w-20" src={logo} alt="" /></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-error">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;