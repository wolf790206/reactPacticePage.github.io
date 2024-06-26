import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	comfirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, comfirmPassword } = formFields;
	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== comfirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormField();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error:', error.message);
			}
		}
	};
	// console.log(formFields);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					inputOption={{
						type: 'text',
						required: true,
						onChange: handleChange,
						name: 'displayName',
						value: displayName,
					}}
				/>
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
				<FormInput
					label="Comfirm Password"
					inputOption={{
						type: 'comfirmPassword',
						required: true,
						onChange: handleChange,
						name: 'comfirmPassword',
						value: comfirmPassword,
					}}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
