import React from "react"
import { Button, Link } from "@/Components"
import { Submit as SubmitButton, useForm } from "use-inertia-form"
import { Flex, type ButtonProps } from "@mantine/core"

interface SubmitButtonProps extends ButtonProps {
	cancelRoute?: string
	requiredFields?: string[]
}

const Submit = (
	{ children, cancelRoute, style, ...props }: SubmitButtonProps,
) => {
	const { data } = useForm()

	return (
		<Flex gap="md" className="submit">
			<Button
				component={ SubmitButton }
				style={ [{ flex: 1 }, style] }
				{ ...props }
			>
				{ children }
			</Button>
			{ cancelRoute && (
				<Link mt={ 10 } href={ cancelRoute } as="button">Cancel</Link>
			) }
		</Flex>
	)
}

export default Submit
