import React from 'react'
import { Box, BoxProps } from '@mantine/core'
import cx from 'clsx'
import { useFormFormat } from '../Form'
import { type InputType } from '@/types'

export interface FieldProps extends BoxProps {
	children: React.ReactNode
	type?: InputType
	required?: boolean
	errors?: boolean
}

const Field = ({
	children,
	type,
	required = false,
	errors = false,
	className,
	...props
}: FieldProps) => {
	const { disableFormatting } = useFormFormat()

	return (
		<Box
			className={ cx(
				'field',
				{ [String(type)]: type },
				{ 'required': required },
				{ 'field_with_errors': errors },
				{ 'no-grid': disableFormatting },
				className,
			) }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default Field
