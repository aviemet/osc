import React from 'react'
import { Form, TextInput, PasswordInput, Submit, Field } from '@/Components/Form'
import { Routes } from '@/lib'
import { Box, Title, Link, Grid, Text } from '@/Components'
import { type UseFormProps } from 'use-inertia-form'

type RegisterFormData = {
	user: {
		email: string
		password: string
		password_confirmation: string
	}
}

interface RegisterProps {
	user: Schema.UsersFormData
	first_run: boolean
}

const Register = ({ user, first_run }: RegisterProps) => {
	const handleFormChange = ({ data }: UseFormProps<RegisterFormData>) => {
	}

	const handlePasswordChange = (value: string|number, { data, getError, clearErrors }: UseFormProps<RegisterFormData>) => {
		if(getError('user.password') || getError('user.password_confirmation')) {
			if(data.user.password === data.user.password_confirmation) {
				clearErrors('user.password')
				clearErrors('user.password_confirmation')
			}
		}
	}

	const handleSubmit = ({ data, setError, errors, transform }: UseFormProps<RegisterFormData>) => {
		if(data.user.password !== data.user.password_confirmation) {
			setError('user.password_confirmation', 'Passwords must match')
			return false
		}
	}

	const handleEmailBlur = (value: string|number, form: UseFormProps<RegisterFormData>) => {
	}
	console.log({ route: Routes.userRegistration() })
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
				<Title mb="sm">Sign Up</Title>

				{ first_run &&
					<Text>There is currently no admin user, please create one below</Text>
				}

			</Box>
			<Grid>
				<Grid.Col>
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
				</Grid.Col>

				<Grid.Col>
					<Field>
						<PasswordInput
							name="password"
							placeholder="Password"
							autoComplete="new-password"
							required
							onChange={ handlePasswordChange }
						/>
					</Field>

				</Grid.Col>
				<Grid.Col>
					<Field>
						<PasswordInput
							name="password_confirmation"
							placeholder="Confirm Password"
							autoComplete="new-password"
							required
							onChange={ handlePasswordChange }
						/>
					</Field>

				</Grid.Col>
				<Grid.Col>
					<Field mb={ 16 }>
						<Submit className="large">Sign Up</Submit>
					</Field>

				</Grid.Col>
			</Grid>
			{ !first_run && <Link href={ Routes.newUserSession() }>Log In Instead</Link> }
		</Form>
	)
}

export default Register
