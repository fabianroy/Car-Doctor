import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import PropTypes from 'prop-types';
import app from './../firebase/firebase.config';
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false);

            // if user exist then issue an token
            if (currentUser) {
                axios.post('https://car-doctor-server-one-pi.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log("token response", res.data);
                    })
            } else {
                axios.post('https://car-doctor-server-one-pi.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log("logout response", res.data);
                    })
            }
        });

        return () => unsubscribe();
    }, [user?.email]);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
