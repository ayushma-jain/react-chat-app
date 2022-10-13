import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';

const SignIn = (props) => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }
    const handleSubmit = (e) => {
        console.log('hello');
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formErrors);
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        //const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        if (!values.email) {
            errors.email = 'Email is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    }
    return (
        <div className='i-box'>
            <h3 className='text-success'>{props.heading}</h3>
            <div className='container-fluid h-custom'>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example3">Email address</label>
                                <input type="email" name="email" id="email" className="form-control form-control-lg text-success"
                                    placeholder="Enter a valid email address" value={formValues.email} onChange={handleChange} />

                                <p className='text-danger'>{formErrors.email}</p>
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label" for="form3Example4">Password</label>
                                <input type="password" name="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" value={formValues.password} onChange={handleChange} />

                                <p className='text-danger'>{formErrors.password}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <input type="submit" value="Login" className="btn btn-success btn-lg" />
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger text-success">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
// SignIn.propTypes= {
//     heading: PropTypes.string.isRequired
// }
SignIn.defaultProps = {
    heading: 'sign in page'
}
export default SignIn;