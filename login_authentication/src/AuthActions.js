import { useState, useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";

const AuthActions = () => {
    const [token, setToken] = useLocalStorage('token', '');

    useEffect(() => {
        if (token) {
        }
    }, [token]);

    const login = (newToken) => {
        setToken(newToken);
    };

    const logout = () => {
        setToken('');
    };

    return {
        token,
        login,
        logout,
        isAuthenticated: !!token,
    };
};

export default AuthActions;
