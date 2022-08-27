import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

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
            <div><Field name={"login"} component={Input} placeholder={"Login"} validate={[requiredField]}/></div>
            <div><Field name={"password"} component={Input} placeholder={"Password"} validate={[requiredField]}/></div>
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