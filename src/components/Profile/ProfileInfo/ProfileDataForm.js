import { Formik, Form } from 'formik';
import { MyTextInput, MyCheckbox } from '../../../formik/fieldTemplates';
import { updateUserData } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import React from 'react';
class ProfileDataForm extends React.Component {
    state = { ...this.props.profile, isError: this.props.isError };
    componentDidUpdate(prevProps) {
        console.log('Rerender');
        if (prevProps.isError !== this.props.isError) {
            if (this.props.isError) {
                this.setState({ isError: this.props.isError });
            }
        }
    }

    handleChange = () => {
        if (this.state.isError) {
            this.setState({ isError: false });
        }
    };

    render() {
        console.log(this.state);
        const validate = (values) => {
            const errors = {};
            if (!values.fullName) {
                errors.fullName = 'Required';
            } else if (values.fullName.length > 30) {
                errors.fullName = 'Must be 30 characters or less';
            }
            if (!values.lookingForAJobDescription) {
                errors.lookingForAJobDescription = 'Required';
            } else if (values.lookingForAJobDescription.length > 100) {
                errors.lookingForAJobDescription =
                    'Must be 100 characters or less';
            }

            return errors;
        };

        return (
            <div>
                <h1>Edit your data</h1>
                <Formik
                    initialValues={this.state}
                    validate={validate}
                    onSubmit={(values) => {
                        this.props.updateUserData(values).then((val) => {
                            if (val === 'Success') {
                                this.props.deactivateEditMode();
                            }
                        });
                    }}
                    enableReinitialize={true}
                    children={(props) => {
                        return (
                            <ProfileForm
                                {...props}
                                handleChange={this.handleChange}
                            ></ProfileForm>
                        );
                    }}
                ></Formik>
            </div>
        );
    }
}

const ProfileForm = (props) => {
    return (
        <Form onClick={() => props.handleChange()}>
            <div>
                <MyTextInput
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                />
            </div>
            <div>
                <MyCheckbox
                    name="lookingForAJob"
                    label="Look for a job?"
                ></MyCheckbox>
            </div>
            <div>
                <MyTextInput
                    placeholder="Your proffesionall skills"
                    name="lookingForAJobDescription"
                    type="text"
                />
            </div>
            <b>Contacts</b>
            <div>
                <MyTextInput
                    placeholder="Facebook"
                    name="facebook"
                    type="text"
                />
            </div>
            <div>
                <MyTextInput placeholder="Website" name="website" type="text" />
            </div>
            <div>
                <MyTextInput placeholder="Vk" name="vk" type="text" />
            </div>
            <div>
                <MyTextInput placeholder="Twitter" name="twitter" type="text" />
            </div>
            <div>
                <MyTextInput
                    placeholder="Instagram"
                    name="instagram"
                    type="text"
                />
            </div>
            <div>
                <MyTextInput placeholder="Youtube" name="youtube" type="text" />
            </div>
            <div>
                <MyTextInput placeholder="Github" name="github" type="text" />
            </div>
            <div>
                <MyTextInput
                    placeholder="MainLink"
                    name="mainLink"
                    type="text"
                />
            </div>
            <div>{props.values.isError || null}</div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </Form>
    );
};

const data = (state) => {
    return { isError: state.profileGeneralData.isErrorDuringEditData };
};

export default connect(data, { updateUserData })(ProfileDataForm);

// function otherPropertiesValidation(
//     validatePropertyKey,
//     validatePropertyValue
// ) {
//     if (!validatePropertyValue) {
//         errors[`${validatePropertyKey}`] = 'Required';
//     } else if (validatePropertyValue.length > 50) {
//         errors[`${validatePropertyKey}`] =
//             'Must be 50 characters or less';
//     }
// }
// const {
//     fullName,
//     lookingForAJobDescription,
//     lookingForAJob,
//     ...otherProp
// } = values;
// Object.keys(otherProp).forEach((el) =>
//     otherPropertiesValidation(el, otherProp[el])
// );
