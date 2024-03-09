import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import {
	signInWithGooglePopup,
	SignInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { ButtonsContainer, SignUpContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};
	const SignWithGoogle = async () => {
		await signInWithGooglePopup();
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await SignInAuthUserWithEmailAndPassword(email, password);
			resetFormField();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					inputOption={{
						type: 'email',
						required: true,
						onChange: handleChange,
						name: 'email',
						value: email,
					}}
				/>
				<FormInput
					label="Password"
					inputOption={{
						type: 'password',
						required: true,
						onChange: handleChange,
						name: 'password',
						value: password,
					}}
				/>
				<ButtonsContainer>
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType={BUTTON_TYPES_CLASSES.google}
						onClick={SignWithGoogle}
					>
						Google Sign In
					</Button>
				</ButtonsContainer>
			</form>
		</SignUpContainer>
	);
};

export default SignInForm;
