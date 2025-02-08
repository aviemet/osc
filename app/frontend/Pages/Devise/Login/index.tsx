import React, { useRef } from "react"
import { Form, Field, TextInput, PasswordInput, Checkbox, Submit } from "@/Components/Form"
import { Routes, useTranslation } from "@/lib"
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

const Login = () => {
	const { t } = useTranslation()

	const defaultData = {
		user: {
			email: "",
			password: "",
			remember_me: false,
		},
	}

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
				<Title>{ t("site.title") }</Title>
			</div>

			<Field>
				<TextInput
					name="email"
					placeholder={ t("auth.login.email_placeholder") }
					autoFocus
					autoComplete="Email"
					required
					pattern=".+@.+\..+"
				/>
			</Field>

			<Field>
				<PasswordInput
					name="password"
					placeholder={ t("auth.login.password_placeholder") }
					autoComplete="current-password"
					required
				/>
			</Field>

			<Field>
				<Submit>{ t("auth.login.submit") }</Submit>
			</Field>

			<Field>
				<Checkbox name="remember_me" label={ t("auth.login.remember_me") } />
			</Field>

			<Link href={ Routes.newUserPassword() }>{ t("auth.login.links.reset_password") }</Link>
			<Link href={ Routes.newUserRegistration() }>{ t("auth.login.links.register") }</Link>

		</Form>
	)
}

export default Login
