import React from "react"
import { Form, TextInput, Submit } from "@/Components/Form"
import { Routes } from "@/lib"
import { Title, Link } from "@/Components"

interface IConfirmationsNew {
	user: Schema.User
}

const ConfirmationsNew = ({ user }: IConfirmationsNew) => {
	return (
		<Form
			model="user"
			data={ { user } }
			to={ Routes.userConfirmation() }
		>
			<div>
				<Title order={ 3 }>Please check your email</Title>
				<p>An email has been sent to the address provided. Please follow the link to confirm your account.</p>
				<p>If you don&apos;t receive an email, use the form below to resend it.</p>
			</div>

			<div>
				<TextInput name="email" placeholder="Email" autoComplete="Email" required />
			</div>

			<div>
				<Submit className="large">Resend confirmation instructions</Submit>
			</div>

			<Link href={ Routes.newUserRegistration() }>Register</Link>
			<Link href={ Routes.newUserSession() }>Log In Instead</Link>

		</Form>
	)
}

export default ConfirmationsNew
