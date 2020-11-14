import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

function Register({ setAlert }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confpassword: "",
    });
    const { name, email, password, confpassword } = formData;
    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = async e => {
        e.preventDefault();
        if (password !== confpassword) {
            console.log(setAlert);
            setAlert("Passwords just do not match!", "danger");
        } else {
            console.log("hi");
        }
    };
    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
                <i className="fas fa-user"></i>Create Your Account
            </p>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Name"
                        id=""
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                    <small className="form-text">
                        This site uses Gravatar, so if you want a profile image, use a
                        Gravatar email
                    </small>
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
                <div className="form-group">
                    <input
                        type="password"
                        name="confpassword"
                        value={confpassword}
                        placeholder="Confirm Password"
                        minlength="6"
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Log In</Link>
            </p>
        </Fragment>
    );
}
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
};
export default connect(null, { setAlert })(Register);
