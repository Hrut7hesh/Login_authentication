import React from 'react';
import AuthActions from './AuthActions';
import './App.css';

const LogoutButton = () => {
    const { logout } = AuthActions();
    const [logoutMessage, setLogoutMessage] = React.useState('');

    const handleLogout = () => {
        logout();
        setLogoutMessage('You have successfully logged out');
    };

    return (
        <div className="container">
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
            {logoutMessage && <div className="logout-message">{logoutMessage}</div>}
        </div>
    );
};

export default LogoutButton;
