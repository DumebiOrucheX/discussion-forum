import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bulma/css/bulma.min.css";
import styles from "../css/styles.module.css";



const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleGoBack = () => {
      navigate(-1); // Go back to the previous route
    };
  

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check for empty fields
        if (!username || !email || !password || !profilePicture) {
            alert("Please fill out all fields including the profile picture");
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("profilePicture", profilePicture);
    
            const response = await fetch("https://betathread.com/forum/signup", {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                const errorMessage = await response.text(); // Get the error message from the server
                throw new Error(errorMessage || "Signup failed. Please try again later.");
            }
    
            const data = await response.json();
            alert("Successfully signed up!");
            navigate("/login");
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Signup failed. Please try again later.");
        }
    };
    
    return (
        <>
          <div className={styles.closeIconContainer}>
        <button className={styles.closebtn} onClick={handleGoBack}>
          <i className="material-icons">close</i>
        </button>
      </div>
        <div className="beta-container">
            <h1 className="title has-text-centered" id="beta-heading">Sign up</h1>
            <div className="column is-6">
                <div className="box" style={{ backgroundColor: "#f0f8ff", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}>
                    <h2 id="beta-sub-heading">Create an account</h2>
                    <p className="has-text-centered" style={{ color: "#2c444e", fontFamily: "inherit" }}>
                        Already have an account? <Link to="/login" style={{ color: "blue" }}>Log In</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="name" className="label" style={{ color: "#2c444e", fontFamily: "inherit" }}>Name</label>
                            <div className="control has-icons-right input-cnt">
                                <input
                                    type="text"
                                    name="name"
                                    value={username}
                                    className="input"
                                    placeholder="Enter your name"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <i className="material-icons" id="beta2">person</i>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email" className="label" style={{ color: "#2c444e", fontFamily: "inherit" }}>Email</label>
                            <div className="control has-icons-right input-cnt">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    className="input"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <i className="material-icons" id="beta2">email</i>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="password" className="label" style={{ color: "#2c444e", fontFamily: "inherit" }}>Password</label>
                            <div className="control has-icons-right input-cnt">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={password}
                                    className="input"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <i
                                    className="material-icons"
                                    id="beta1"
                                    title="show or hide password"
                                    onClick={handleTogglePassword}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {showPassword ? 'visibility' : 'visibility_off'}
                                </i>
                                <i className="material-icons" id="beta2">lock</i>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="profilePicture" className="label" style={{ color: "#2c444e", fontFamily: "inherit" }}>Profile Picture</label>
                            <div className="control">
                                <input
                                    type="file"
                                    name="profilePicture"
                                    accept="image/*"
                                    onChange={(e) => setProfilePicture(e.target.files[0])}
                                />
                            </div>
                        </div>
                        <label>
                            <input
                                type="checkbox"
                                name="remember"
                                style={{ marginBottom: "15px" }}
                            />
                            <span style={{color: 'black'}}>
                                I agree to all of Beta Thread's policies in<br />
                                <Link to="/terms&privacy"><u>Terms of service</u></Link>
                            </span>
                        </label>
                        <br />
                        <div className="flex items-center justify-center mt-6">
                            <button
                                type="submit"
                                className="button"
                                style={{ backgroundColor: "blue", color: "white", width: "100%", borderRadius: "12px", fontSize: "18px", fontWeight: "normal", fontFamily: "inherit" }}
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signup;
