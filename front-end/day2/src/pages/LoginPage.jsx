import React, { useState } from 'react';
import '../assets/css/login.css'; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const toggleForm = () => {
        setIsSignIn(!isSignIn);
        setIsActive(!isActive);
    };

    const handleLogin = () => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if(username=="Admin" && password=="Admin123")
        {
            console.log("login");
            navigate("/admin/appstatus");
        }
    
        if (username === storedUsername && password === storedPassword) {
            setLoggedIn(true);
            navigate("/");
        } else {
            alert('Invalid username or password');
        }

    };

    const handleSignup = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        setLoggedIn(true);
    };

    return (
        <div className='login-container'>

        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
                <form>
                    <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>
                    <div className="social-icons">
                        <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ATuJsjyPvmO_KcTR7XmcjNQvdD8dvScsWuqUg4RIZVNVcZtbFSPUa8ACnGteMoIqr24jva750jha&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-133188472%3A1710612035143821&theme=mn&ddm=0" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="https://www.facebook.com/login.php/" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://github.com/login" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/login" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    {!isSignIn && <span>or use your email for registration</span>}
                    {!isSignIn && <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />}
                    <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {isSignIn && <a href="#">Forget Your Password?</a>}
                    <button type="button" onClick={isSignIn ? handleLogin : handleSignup}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel toggle-left ${isActive && isSignIn ? 'active' : ''}`}>
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" id="login" onClick={toggleForm}>Sign In</button>
                    </div>
                    <div className={`toggle-panel toggle-right ${isActive && !isSignIn ? 'active' : ''}`}>
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all site features</p>
                        <button className="hidden" id="register" onClick={toggleForm}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;
