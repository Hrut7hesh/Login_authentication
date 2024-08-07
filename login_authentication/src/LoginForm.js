import React, { useState } from 'react';
import axios from 'axios';
import AuthActions from './AuthActions';
import './App.css';

const LoginForm = () => {
    const { login, isAuthenticated } = AuthActions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
                username,
                password
            });

            if (response.data.ok) {
                login(response.data.token);
                setLoginMessage('Successfully logged in!');
            } else {
                setError('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred. Please try again.');
        }
    };

    if (isAuthenticated) {
        return <p className="success">You are already logged in!</p>;
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
                {loginMessage && <p className="success">{loginMessage}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
