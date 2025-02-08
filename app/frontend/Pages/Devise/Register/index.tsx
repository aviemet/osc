import React from "react"
import { Form, TextInput, PasswordInput, Submit, Field } from "@/Components/Form"
import { Routes, useTranslation } from "@/lib"
import { Box, Title, Link, Grid, Text } from "@/Components"
import { type UseFormProps } from "use-inertia-form"

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
	const { t } = useTranslation()

	const handleFormChange = ({ data }: UseFormProps<RegisterFormData>) => {
	}

	const handlePasswordChange = (value: string | number, { data, getError, clearErrors }: UseFormProps<RegisterFormData>) => {
		if(getError("user.password") || getError("user.password_confirmation")) {
			if(data.user.password === data.user.password_confirmation) {
				clearErrors("user.password")
				clearErrors("user.password_confirmation")
			}
		}
	}

	const handleSubmit = ({ data, setError, errors, transform }: UseFormProps<RegisterFormData>) => {
		if(data.user.password !== data.user.password_confirmation) {
			setError("user.password_confirmation", t("auth.register.passwords_must_match"))
			return false
		}
	}

	const handleEmailBlur = (value: string | number, form: UseFormProps<RegisterFormData>) => {
	}

	return (
		<Form
			data={ {
				user: {
					email: "",
					password: "",
					password_confirmation: "",
				},
			} }
			model="user"
			to={ Routes.userRegistration() }
			onChange={ handleFormChange }
			onSubmit={ handleSubmit }
		>
			<Box>
				<Title mb="sm">{ t("auth.register.title") }</Title>

				{ first_run &&
					<Text>{ t("auth.register.admin_setup") }</Text>
				}
			</Box>

			<Grid>
				<Grid.Col>
					<Field>
						<TextInput
							name="email"
							placeholder={ t("auth.register.email_placeholder") }
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
							placeholder={ t("auth.register.password_placeholder") }
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
							placeholder={ t("auth.register.confirm_password_placeholder") }
							autoComplete="new-password"
							required
							onChange={ handlePasswordChange }
						/>
					</Field>
				</Grid.Col>

				<Grid.Col>
					<Field mb={ 16 }>
						<Submit className="large">{ t("auth.register.submit") }</Submit>
					</Field>
				</Grid.Col>
			</Grid>

			{ !first_run &&
				<Link href={ Routes.newUserSession() }>
					{ t("auth.register.login_instead") }
				</Link>
			}
		</Form>
	)
}

export default Register
