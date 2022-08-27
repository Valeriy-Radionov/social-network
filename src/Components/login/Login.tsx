import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type LoginPropsType = {}

export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={"login"} component={"input"} placeholder={"Login"}/></div>
            <div><Field name={"password"} component={"input"} placeholder={"Password"}/></div>
            <div><Field name={"rememberMe"} component={"input"} type={"checkbox"}/> remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginFReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)