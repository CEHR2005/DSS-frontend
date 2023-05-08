import {createContext, useEffect, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{loggedIn, setLoggedIn, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const getToken = () => {
    return localStorage.getItem('jwtToken');
}

export default AuthContext;
