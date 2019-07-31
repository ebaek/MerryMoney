import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = ({errors}) => {
    return ({
        errors: errors.session,
        formType: "Sign Up",
        navLink: <Link to="/login">log in instead</Link>,
    });
}

const mdp = (dispatch) => {
    return ({
        processForm: (user) => dispatch(signup(user)),
    })
}

export default connect(msp, mdp)(SignupForm)

