import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Form.css';
import { LoginContext } from '../App';

const users = [
    {
        id: 1,
        name: "Sample User 1",
        email: 'sampleuser1@mail.com',
        password: 'sampleuser1',
        balance: 10000,
    },
    {
        id: 2,
        name: "Sample User2",
        email: 'sampleuser2@mail.com',
        password: 'sampleuser2',
        balance: 20000,
    }
];

const Form = () => {
    const { setIsLoggedIn } = useContext(LoginContext);
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [error, setError] = useState({ condition: false, message: '' });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.email === '' || userData.password === '') {
            setError({ condition: true, message: "Fill all details" });
            return;
        } else if (userData.password.length < 5) {
            setError({ condition: true, message: "Password should be more than 5 characters!" });
            return;
        }

        const user = users.find(u => u.email === userData.email && u.password === userData.password);

        if (user) {
            setIsLoggedIn(true);
            navigate(`/dashboard/${user.id}`);
        } else {
            setError({ condition: true, message: "Invalid email or password" });
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                {error.condition && <p className='error-message'>{error.message}</p>}

                <div className='form-heading'>
                    <h1>Log In</h1>
                </div>
                <div>
                    <input
                        type="email"
                        placeholder='Email address'
                        id="input1"
                        value={userData.email}
                        onChange={(event) => setUserData({ ...userData, email: event.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder='Password'
                        id="input2"
                        value={userData.password}
                        onChange={(event) => setUserData({ ...userData, password: event.target.value })}
                    />
                </div>
                <div>
                    <button type="submit" className='login-btn'>LogIn</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
