import React from 'react'
import { Form, TextInput, PasswordInput, Submit, Field } from '@/Components/Form'
import { Routes } from '@/lib'
import { Box, Heading, Link } from '@/Components'
import { type UseFormProps } from 'use-inertia-form'

type TRegisterFormData = {
	user: {
		email: string
		password: string
		password_confirmation: string
	}
}

const Register = () => {
	const handleFormChange = ({ data }: UseFormProps<TRegisterFormData>) => {
	}

	const handlePasswordChange = (value: string|number, { data, getError, clearErrors }: UseFormProps<TRegisterFormData>) => {
		if(getError('user.password') || getError('user.password_confirmation')) {
			if(data.user.password === data.user.password_confirmation) {
				clearErrors('user.password')
				clearErrors('user.password_confirmation')
			}
		}
	}

	const handleSubmit = ({ data, setError, errors, transform }: UseFormProps<TRegisterFormData>) => {
		if(data.user.password !== data.user.password_confirmation) {
			setError('user.password_confirmation', 'Passwords must match')
			return false
		}
	}

	const handleEmailBlur = (value: string|number, form: UseFormProps<TRegisterFormData>) => {
	}

	return (
		<Form
			data={ {
				user: {
					email: '',
					password: '',
					password_confirmation: '',
				},
			} }
			model="user"
			to={ Routes.userRegistration() }
			onChange={ handleFormChange }
			onSubmit={ handleSubmit }
		>

			<Box>
				<Heading>Sign Up</Heading>
			</Box>

			<Field>
				<TextInput
					name="email"
					placeholder="Email"
					autoFocus
					autoComplete="Email"
					required
					onBlur={ handleEmailBlur }
				/>
			</Field>

			<Field>
				<PasswordInput
					name="password"
					placeholder="Password"
					autoComplete="new-password"
					required
					onChange={ handlePasswordChange }
				/>
			</Field>

			<Field>
				<PasswordInput
					name="password_confirmation"
					placeholder="Confirm Password"
					autoComplete="new-password"
					required
					onChange={ handlePasswordChange }
				/>
			</Field>

			<Field mb={ 16 }>
				<Submit className="large">Sign Up</Submit>
			</Field>

			<Link href={ Routes.newUserSession() }>Log In Instead</Link>

		</Form>
	)
}

export default Register
