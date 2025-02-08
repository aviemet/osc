import React from "react"
import { Form, TextInput, Submit } from "@/Components/Form"
import { Routes, useTranslation } from "@/lib"
import { Title, Link } from "@/Components"

interface IConfirmationsNew {
	user: Schema.User
}

const ConfirmationsNew = ({ user }: IConfirmationsNew) => {
	const { t } = useTranslation()

	return (
		<Form
			model="user"
			data={ { user } }
			to={ Routes.userConfirmation() }
		>
			<div>
				<Title order={ 3 }>{ t("auth.confirmations.title") }</Title>
				<p>{ t("auth.confirmations.instructions") }</p>
				<p>{ t("auth.confirmations.resend_instructions") }</p>
			</div>

			<div>
				<TextInput
					name="email"
					placeholder={ t("auth.confirmations.email_placeholder") }
					autoComplete="Email"
					required
				/>
			</div>

			<div>
				<Submit className="large">{ t("auth.confirmations.submit") }</Submit>
			</div>

			<Link href={ Routes.newUserRegistration() }>
				{ t("auth.confirmations.links.register") }
			</Link>
			<Link href={ Routes.newUserSession() }>
				{ t("auth.confirmations.links.login") }
			</Link>
		</Form>
	)
}

export default ConfirmationsNew
