import React, { useRef } from 'react'
import { Form, Field, TextInput, PasswordInput, Checkbox, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import { Heading, Link } from '@/Components'
import { type UseFormProps } from 'use-inertia-form'
import * as classes from './Login.css'

type LoginFormData = {
	user: {
		email: string
		password: string
		remember_me: boolean
	}
}

const defaultData = {
	user: {
		email: '',
		password: '',
		remember_me: false,
	},
}

const Login = () => {
	const emailInputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = ({ data }: UseFormProps<LoginFormData>) => {
		if(data.user.email === '' || data.user.password === '') {
			emailInputRef.current!.focus()
			return false
		}
	}

	return (
		<Form model="user" data={ defaultData } to={ Routes.newUserSession() } onSubmit={ handleSubmit } grid={ false } className={ classes.form }>

			<div>
				<Heading>Inventory</Heading>
			</div>

			<Field>
				<TextInput
					name="email"
					placeholder="Email"
					autoFocus
					autoComplete="Email"
					required
					ref={ emailInputRef }
					pattern=".+@.+\..+"
				/>
			</Field>

			<Field>
				<PasswordInput
					name="password"
					placeholder="Password"
					autoComplete="current-password"
					required
				/>
			</Field>

			<Field>
				<Submit>Log In</Submit>
			</Field>

			<Field>
				<Checkbox name="remember_me" label="Remember Me" />
			</Field>

			<Link href={ Routes.newUserPassword() }>Reset Password</Link>
			<Link href={ Routes.newUserRegistration() }>Register</Link>

		</Form>
	)
}

export default Login
