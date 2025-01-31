import React, { useRef } from "react"
import { Form, Field, TextInput, PasswordInput, Checkbox, Submit } from "@/Components/Form"
import { Routes } from "@/lib"
import { Title, Link } from "@/Components"
import { type UseFormProps } from "use-inertia-form"
import * as classes from "./Login.css"

type LoginFormData = {
	user: {
		email: string
		password: string
		remember_me: boolean
	}
}

const defaultData = {
	user: {
		email: "",
		password: "",
		remember_me: false,
	},
}

const Login = () => {
	const handleSubmit = ({ data }: UseFormProps<LoginFormData>) => {
		if(data.user.email === "" || data.user.password === "") {
			return false
		}
	}

	return (
		<Form
			model="user"
			data={ defaultData }
			to={ Routes.newUserSession() }
			onSubmit={ handleSubmit }
			className={ classes.form }
		>

			<div>
				<Title>OSC</Title>
			</div>

			<Field>
				<TextInput
					name="email"
					placeholder="Email"
					autoFocus
					autoComplete="Email"
					required
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
