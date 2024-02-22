import React, { forwardRef } from 'react'
import { Button, Link } from '@/Components'
import { Submit as SubmitButton, useForm } from 'use-inertia-form'
import { Flex, type ButtonProps } from '@mantine/core'

interface ISubmitButtonProps extends ButtonProps {
	cancelRoute?: string
}

const Submit = forwardRef<HTMLButtonElement, ISubmitButtonProps>((
	{ children, disabled, cancelRoute, ...props },
	ref,
) => {
	const { processing, isDirty } = useForm()
	return (
		<Flex gap="md" className="submit">
			<SubmitButton
				component={ Button }
				ref={ ref }
				disabled={ disabled || processing || !isDirty }
				{ ...props }
			>
				{ children }
			</SubmitButton>
			{ cancelRoute && (
				<Link mt={ 10 } href={ cancelRoute } as="button">Cancel</Link>
			) }
		</Flex>
	)
})

export default Submit
