import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formData;
    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = async e => {
        e.preventDefault();
        console.log("Done");
    };
    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
                <i className="fas fa-user"></i>Log in to Your Account
            </p>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        minlength="6"
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                />
            </form>
            <p className="my-1">
                No account? <Link to="/register">Create an account</Link>
            </p>
        </Fragment>
    );
}

export default Login;
