import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';
import './App.css';
import AuthActions from './AuthActions';

const App = () => {
    const { isAuthenticated } = AuthActions();
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    useEffect(() => {
        if (isAuthenticated) {
            setShowWelcomeMessage(true);
            const timer = setTimeout(() => {
                setShowWelcomeMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setShowWelcomeMessage(false);
        }
    }, [isAuthenticated]);

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <LogoutButton />
                    {showWelcomeMessage && <p className="success">Welcome back! You are logged in.</p>}
                </>
            ) : (
                <LoginForm />
            )}
        </div>
    );
};

export default App;
