import React from "react";
import { Field, reduxForm } from 'redux-form';
import { loginTC } from "../redux/authReducer.ts";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginForm =(props) =>{


    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="email" type="email" placeholder="login" ></Field>
            </div>
            <div>
                <Field component="input" name="password" type="pasword" placeholder="pasword"></Field>
            </div>
            <div>
                <Field component="input" name="rememberMe" type="checkbox" ></Field> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    if (props.isAuth){
        return <Navigate to="/profile"/>
    }
    
    const onSubmit = (formData) => {
        props.loginTC(formData)
    }
    return <LoginReduxForm onSubmit={onSubmit}/>
}


const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {loginTC})(Login);