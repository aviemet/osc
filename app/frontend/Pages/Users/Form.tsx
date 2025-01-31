import React from "react"
import {
	Form,
	TextInput,
	Submit,
} from "@/Components/Form"
import { type HTTPVerb, type UseFormProps } from "use-inertia-form"

type TUserFormData = {
	user: Schema.UsersFormData
}

export interface IUserFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TUserFormData>) => boolean | void
	user: Schema.UsersFormData
}

const UserForm = ({ to, method = "post", onSubmit, user }: IUserFormProps) => {

	return (
		<Form
			model="user"
			data={ { user } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="first_name" label="First Name" required autoFocus />

			<TextInput name="last_name" label="Last Name" required  />

			<TextInput name="number" label="Number" required  />

			<Submit>
				{ user.id ? "Update" : "Create" } User
			</Submit>
		</Form>
	)
}

export default UserForm
