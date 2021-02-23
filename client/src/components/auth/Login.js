import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

function Login({ login, isAuthenticated }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { email, password } = formData;
    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };
    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }
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

                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
            <p className="my-1">
                No account? <Link to="/register">Create an account</Link>
            </p>
        </Fragment>
    );
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};
const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
