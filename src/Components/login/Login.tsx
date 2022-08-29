import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import style from "../common/FormsControls/FormsControls.module.css"
import {inspect} from "util";

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        let {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
        console.log(formData)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={"email"} component={Input} placeholder={"email"} validate={[requiredField]}/></div>
            <div><Field name={"password"} component={Input} placeholder={"Password"} validate={[requiredField]}
                        type={"password"}/></div>
            <div><Field name={"rememberMe"} component={"input"} type={"checkbox"}/> remember me</div>
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginFReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)