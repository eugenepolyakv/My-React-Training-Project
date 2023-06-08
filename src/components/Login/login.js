import { ErrorMessage, Field, Formik, Form, useField } from 'formik';
import c from './login.module.css';
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (values.email.length > 30) {
        errors.email = 'Must be 30 characters or less';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less';
    }
    return errors;
};

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            {/* <input className={c.input} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={c.popup}>
                    <span className={`${c.popuptext} ${c.show}`}>
                        {meta.error}
                    </span>
                </div>
            ) : null} */}
            <div className={c.popup}>
                <input className={c.input} {...field} {...props} />{' '}
                {meta.touched && meta.error ? (
                    <span className={`${c.popuptext} ${c.show}`}>
                        {meta.error}
                    </span>
                ) : null}
            </div>
        </>
    );
};

const MyCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                {label}
                <input type="checkbox" {...field} {...props} />
                {/* {children} */}
            </label>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <Form className={c.block}>
            <div>
                <MyTextInput
                    onChange={props.handleChange}
                    label="Email"
                    name="email"
                    type="text"
                />
            </div>
            <div>
                <MyTextInput
                    onChange={props.handleChange}
                    label="Password"
                    name="password"
                    type="password"
                />
            </div>
            <div>
                <MyCheckbox name="rememberMe" label="Remember me"></MyCheckbox>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </Form>
    );
};

const Login = (props) => {
    const state = { email: '', password: '', rememberMe: false };

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    ...state,
                }}
                validate={validate}
                onSubmit={(values) => {
                    props.getLoggedInThunk(values);
                }}
                children={(props) => (
                    <LoginForm
                        {...props}
                        // handleChange={() => alert('smth')}
                    ></LoginForm>
                )}
            ></Formik>
        </div>
    );
};

export default Login;
