import { Formik, Form } from 'formik';
import { MyTextInput, MyCheckbox } from '../../formik/fieldTemplates';
import c from './login.module.css';

export const LoginForm = (props) => {
    return (
        <Form className={c.block} onClick={() => props.handleChange()}>
            <div>
                <MyTextInput
                    onChange={(e) => {
                        props.setFieldValue('email', e.target.value);
                    }}
                    name="email"
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div>
                <MyTextInput
                    onChange={(e) => {
                        props.setFieldValue('password', e.target.value);
                    }}
                    placeholder="Password"
                    name="password"
                    type="password"
                />
            </div>
            <div>
                {/* {props.values.isError
                    ? 'Wrong email or password. Try again'
                    : null} */}
                {props.values.isError || null}
            </div>
            <div>
                <MyCheckbox
                    onChange={() => {
                        props.setFieldValue(
                            'rememberMe',
                            !props.values.rememberMe
                        );
                    }}
                    name="rememberMe"
                    label="Remember me"
                ></MyCheckbox>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </Form>
    );
};

// const Login = (props) => {
//     const state = { email: '', password: '', rememberMe: false };

//     return (
//         <div>
//             <h1>Login</h1>
//             <Formik
//                 initialValues={{
//                     ...state,
//                 }}
//                 validate={validate}
//                 onSubmit={(values) => {
//                     props.getLoggedInThunk(values);
//                 }}
//                 children={(props) => (
//                     <LoginForm
//                         {...props}
//                         // handleChange={() => alert('smth')}
//                     ></LoginForm>
//                 )}
//             ></Formik>
//         </div>
//     );
// };

// export default Login;
